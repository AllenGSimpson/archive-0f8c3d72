(() => {
  const data = window.WIKI_GRAPH_DATA;
  const canvas = document.querySelector("[data-wiki-graph]");
  const stage = document.querySelector("[data-graph-stage]");
  const goButton = document.querySelector("[data-graph-go]");
  const searchInput = document.querySelector("[data-graph-search]");
  const searchStatus = document.querySelector("[data-graph-search-status]");
  const articleLabelLayer = document.querySelector("[data-graph-article-labels]");
  if (!data || !canvas || !stage) return;

  document.querySelector("[data-graph-pages]").textContent = data.pageCount.toLocaleString();
  document.querySelector("[data-graph-links]").textContent = data.connectionCount.toLocaleString();

  const gl = canvas.getContext("webgl", { alpha: true, antialias: true, depth: true, premultipliedAlpha: false });
  if (!gl) {
    document.querySelector("[data-graph-error]").hidden = false;
    return;
  }

  const nodes = data.nodes.map(([title, href, words, radius, x, y, z, degree, community]) => ({ title, href, words, radius, x, y, z, degree, community }));
  const nodeCount = nodes.length;
  const edgeCount = data.edges.length;
  const structuralEdges = data.structuralEdges || [];
  const structuralEdgeCount = structuralEdges.length;
  const nodeClip = new Float32Array(nodeCount * 3);
  const nodeSizes = new Float32Array(nodeCount);
  const nodeColors = new Float32Array(nodeCount * 4);
  const edgeClip = new Float32Array(edgeCount * 6);
  const edgeColors = new Float32Array(edgeCount * 8);
  const structuralClip = new Float32Array(structuralEdgeCount * 6);
  const structuralColors = new Float32Array(structuralEdgeCount * 8);
  const screenX = new Float64Array(nodeCount);
  const screenY = new Float64Array(nodeCount);
  const screenRadius = new Float64Array(nodeCount);
  const titleSearchValues = nodes.map((node) => node.title.toLocaleLowerCase());
  const searchMatches = new Uint8Array(nodeCount);
  const baseCenter = [0, 0, 0];
  const graphHalfWidth = Math.max(...nodes.map((node) => Math.abs(node.x) + node.radius));
  const graphHalfHeight = Math.max(...nodes.map((node) => Math.abs(node.y) + node.radius));
  const minimumLabelFontSize = 10 * 96 / 72;
  const inscribedLabelBoxFactor = Math.SQRT2;
  const labelTiers = data.labelTiers || Array(nodeCount).fill(3);
  const labelTierZoom = [1, 1.75, 3, 5];
  const articleLabels = nodes.map((node, index) => ({ node: index, words: node.words, href: node.href, tier: labelTiers[index] ?? 3 }));
  const labelFragment = document.createDocumentFragment();
  const labelMeasureContext = document.createElement("canvas").getContext("2d");
  labelMeasureContext.font = `800 ${minimumLabelFontSize}px Arial`;
  const minimumLabelLineHeight = minimumLabelFontSize * 0.92;
  for (const articleLabel of articleLabels) {
    const label = document.createElement("span");
    label.className = "graph-article-label";
    label.textContent = nodes[articleLabel.node].title;
    label.dataset.article = nodes[articleLabel.node].href;
    label.hidden = true;
    labelFragment.append(label);
    articleLabel.label = label;
    const measuredWidth = labelMeasureContext.measureText(nodes[articleLabel.node].title.toLocaleUpperCase()).width;
    articleLabel.minimumBoxSize = Math.ceil(Math.max(minimumLabelLineHeight,
      Math.sqrt(measuredWidth * minimumLabelLineHeight) * 1.5 + 2));
  }
  articleLabelLayer?.append(labelFragment);
  let visibleArticleLabels = [];
  const minimumLabelProjectionScale = Math.max(...articleLabels.map((articleLabel) =>
    articleLabel.minimumBoxSize / (nodes[articleLabel.node].radius * inscribedLabelBoxFactor)));

  let width = 1;
  let height = 1;
  let pixelRatio = 1;
  let projectionScale = 1;
  let yaw = 0;
  let zoom = 1;
  let selected = -1;
  let hovered = -1;
  let searchQuery = "";
  let searchMatchCount = 0;
  let rendered = false;
  let frameRequested = false;
  let focusCenter = [...baseCenter];
  let focusFrom = [...baseCenter];
  let focusTo = [...baseCenter];
  let focusStarted = 0;
  let focusAnimating = false;
  let pointerStart = null;
  let pointerMoved = false;

  const vertexEdge = `
    attribute vec3 a_position;
    attribute vec4 a_color;
    varying vec4 v_color;
    void main() { gl_Position = vec4(a_position, 1.0); v_color = a_color; }
  `;
  const fragmentEdge = `
    precision mediump float;
    varying vec4 v_color;
    void main() { gl_FragColor = v_color; }
  `;
  const vertexNode = `
    attribute vec3 a_position;
    attribute float a_size;
    attribute vec4 a_color;
    varying vec4 v_color;
    void main() { gl_Position = vec4(a_position, 1.0); gl_PointSize = a_size; v_color = a_color; }
  `;
  const fragmentNode = `
    precision mediump float;
    varying vec4 v_color;
    uniform vec4 u_border;
    void main() {
      float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
      if (distanceFromCenter > 0.5) discard;
      float edge = smoothstep(0.39, 0.49, distanceFromCenter);
      float alpha = 1.0 - smoothstep(0.47, 0.5, distanceFromCenter);
      gl_FragColor = mix(v_color, u_border, edge);
      gl_FragColor.a *= alpha;
    }
  `;

  function shader(type, source) {
    const compiled = gl.createShader(type);
    gl.shaderSource(compiled, source);
    gl.compileShader(compiled);
    if (!gl.getShaderParameter(compiled, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(compiled));
    return compiled;
  }

  function program(vertexSource, fragmentSource) {
    const value = gl.createProgram();
    gl.attachShader(value, shader(gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(value, shader(gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(value);
    if (!gl.getProgramParameter(value, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(value));
    return value;
  }

  const edgeProgram = program(vertexEdge, fragmentEdge);
  const nodeProgram = program(vertexNode, fragmentNode);
  const edgePositionBuffer = gl.createBuffer();
  const edgeColorBuffer = gl.createBuffer();
  const structuralPositionBuffer = gl.createBuffer();
  const structuralColorBuffer = gl.createBuffer();
  const nodePositionBuffer = gl.createBuffer();
  const nodeSizeBuffer = gl.createBuffer();
  const nodeColorBuffer = gl.createBuffer();

  function cssColor(property, alpha = 1) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(property).trim();
    const match = value.match(/^#([\da-f]{6})$/i);
    if (match) return [Number.parseInt(match[1].slice(0, 2), 16) / 255, Number.parseInt(match[1].slice(2, 4), 16) / 255, Number.parseInt(match[1].slice(4, 6), 16) / 255, alpha];
    const rgb = value.match(/[\d.]+/g)?.map(Number) || [255, 255, 255];
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, alpha];
  }

  function writeColor(target, offset, color) {
    target[offset] = color[0]; target[offset + 1] = color[1]; target[offset + 2] = color[2]; target[offset + 3] = color[3];
  }

  function refreshColors() {
    const revealProgress = Math.max(0, Math.min(1, (zoom - 1.5) / 2.5));
    const reveal = revealProgress * revealProgress * (3 - 2 * revealProgress);
    const peerProgress = Math.max(0, Math.min(1, (zoom - 1.75) / 1.75));
    const peerReveal = peerProgress * peerProgress * (3 - 2 * peerProgress);
    for (let edge = 0; edge < edgeCount; edge += 1) {
      const [source, target] = data.edges[edge];
      const selectedIncident = selected >= 0 && (source === selected || target === selected);
      const hoveredIncident = hovered >= 0 && (source === hovered || target === hovered);
      const searchIncident = searchQuery && (searchMatches[source] || searchMatches[target]);
      let alpha = 0.3 * reveal * (searchQuery ? 0.2 : 1);
      if (searchIncident) alpha = 0.55;
      if (hoveredIncident) alpha = 0.68;
      if (selectedIncident) alpha = 0.85;
      writeColor(edgeColors, edge * 8, cssColor("--graph-origin", alpha));
      writeColor(edgeColors, edge * 8 + 4, cssColor("--graph-destination", alpha));
    }
    for (let edge = 0; edge < structuralEdgeCount; edge += 1) {
      const [source, target, kind] = structuralEdges[edge];
      const active = source === selected || target === selected || source === hovered || target === hovered
        || (searchQuery && (searchMatches[source] || searchMatches[target]));
      const property = kind === 0 ? "--graph-trunk" : kind === 1 ? "--graph-peer" : "--graph-bridge";
      const alpha = active ? 0.82 : kind === 0 ? 0.46 : kind === 1 ? 0.16 * peerReveal : 0.28;
      const color = cssColor(property, alpha);
      writeColor(structuralColors, edge * 8, color);
      writeColor(structuralColors, edge * 8 + 4, color);
    }
    const ordinary = cssColor("--graph-node", 0.94);
    const muted = cssColor("--graph-node", 0.16);
    const hover = cssColor("--accent-2", 1);
    const active = cssColor("--accent", 1);
    for (let node = 0; node < nodeCount; node += 1) {
      const color = node === selected || searchMatches[node] ? active : node === hovered ? hover : searchQuery ? muted : ordinary;
      writeColor(nodeColors, node * 4, color);
    }
  }

  function updateSearch() {
    searchQuery = searchInput?.value.trim().toLocaleLowerCase() || "";
    searchMatchCount = 0;
    searchMatches.fill(0);
    if (searchQuery) {
      for (let node = 0; node < nodeCount; node += 1) {
        if (!titleSearchValues[node].includes(searchQuery)) continue;
        searchMatches[node] = 1;
        searchMatchCount += 1;
      }
    }
    if (searchStatus) searchStatus.textContent = searchQuery ? `${searchMatchCount.toLocaleString()} ${searchMatchCount === 1 ? "match" : "matches"}` : "";
    canvas.dataset.searchQuery = searchQuery;
    canvas.dataset.searchMatchCount = String(searchMatchCount);
    requestDraw();
  }

  function focusClearance() {
    return selected >= 0 ? nodes[selected].radius * 1.35 + 9 : 0;
  }

  function rotatePoint(node, index) {
    let worldX = node.x;
    let worldY = node.y;
    if (selected >= 0 && index !== selected) {
      const dx = node.x - nodes[selected].x;
      const dy = node.y - nodes[selected].y;
      const distance = Math.max(0.001, Math.hypot(dx, dy));
      const expansion = focusClearance() / distance;
      worldX += dx * expansion;
      worldY += dy * expansion;
    }
    const x = worldX - focusCenter[0];
    const y = worldY - focusCenter[1];
    const cosine = Math.cos(yaw);
    const sine = Math.sin(yaw);
    return [cosine * x - sine * y, sine * x + cosine * y, 0];
  }

  function verifyScreenClearance() {
    const largest = Math.max(...screenRadius);
    const cellSize = Math.max(2, largest * 2 + 1);
    const buckets = new Map();
    for (let index = 0; index < nodeCount; index += 1) {
      const key = `${Math.floor(screenX[index] / cellSize)},${Math.floor(screenY[index] / cellSize)}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(index);
    }
    let overlaps = 0;
    for (let left = 0; left < nodeCount; left += 1) {
      const cx = Math.floor(screenX[left] / cellSize);
      const cy = Math.floor(screenY[left] / cellSize);
      for (let ox = -1; ox <= 1; ox += 1) for (let oy = -1; oy <= 1; oy += 1) {
        for (const right of buckets.get(`${cx + ox},${cy + oy}`) || []) {
          if (right <= left) continue;
          if (Math.hypot(screenX[right] - screenX[left], screenY[right] - screenY[left]) < screenRadius[left] + screenRadius[right]) overlaps += 1;
        }
      }
    }
    canvas.dataset.overlapCount = String(overlaps);
  }

  function fittedProjectionScale() {
    const cosine = Math.abs(Math.cos(yaw));
    const sine = Math.abs(Math.sin(yaw));
    const rotatedHalfWidth = cosine * graphHalfWidth + sine * graphHalfHeight;
    const rotatedHalfHeight = sine * graphHalfWidth + cosine * graphHalfHeight;
    return Math.min(width / (rotatedHalfWidth * 2.12), height / (rotatedHalfHeight * 2.12));
  }

  function maximumZoom() {
    return Math.max(7, minimumLabelProjectionScale / Math.max(0.0001, fittedProjectionScale()) * 1.02);
  }

  function project() {
    zoom = Math.min(zoom, maximumZoom());
    const scale = fittedProjectionScale() * zoom;
    projectionScale = scale;
    canvas.dataset.cameraX = focusCenter[0].toFixed(2);
    canvas.dataset.cameraY = focusCenter[1].toFixed(2);
    canvas.dataset.maximumZoom = maximumZoom().toFixed(3);
    for (let index = 0; index < nodeCount; index += 1) {
      const [x, y] = rotatePoint(nodes[index], index);
      screenX[index] = width / 2 + x * scale;
      screenY[index] = height / 2 - y * scale;
      screenRadius[index] = nodes[index].radius * scale;
    }
    verifyScreenClearance();

    for (let index = 0; index < nodeCount; index += 1) {
      nodeClip[index * 3] = screenX[index] / width * 2 - 1;
      nodeClip[index * 3 + 1] = 1 - screenY[index] / height * 2;
      nodeClip[index * 3 + 2] = 0;
      nodeSizes[index] = Math.max(1, screenRadius[index] * 2 * pixelRatio);
    }
    for (let edge = 0; edge < edgeCount; edge += 1) {
      const [source, target] = data.edges[edge];
      edgeClip.set(nodeClip.subarray(source * 3, source * 3 + 3), edge * 6);
      edgeClip.set(nodeClip.subarray(target * 3, target * 3 + 3), edge * 6 + 3);
    }
    for (let edge = 0; edge < structuralEdgeCount; edge += 1) {
      const [source, target] = structuralEdges[edge];
      structuralClip.set(nodeClip.subarray(source * 3, source * 3 + 3), edge * 6);
      structuralClip.set(nodeClip.subarray(target * 3, target * 3 + 3), edge * 6 + 3);
    }
    positionArticleLabels();

    const ring = document.querySelector("[data-graph-focus-ring]");
    if (selected >= 0) {
      const diameter = (nodes[selected].radius + focusClearance()) * scale * 2;
      ring.style.width = `${diameter}px`;
      ring.style.height = `${diameter}px`;
      ring.style.left = `${screenX[selected] - diameter / 2}px`;
      ring.style.top = `${screenY[selected] - diameter / 2}px`;
      ring.hidden = false;
    } else {
      ring.hidden = true;
    }
  }

  function positionArticleLabels() {
    if (!articleLabelLayer) return;
    for (const articleLabel of visibleArticleLabels) articleLabel.label.hidden = true;
    visibleArticleLabels = [];
    let onscreenCount = 0;
    for (const articleLabel of articleLabels) {
      const node = articleLabel.node;
      const anchorX = screenX[node];
      const anchorY = screenY[node];
      const labelBoxSize = screenRadius[node] * inscribedLabelBoxFactor;
      if (anchorX + screenRadius[node] < 0 || anchorX - screenRadius[node] > width
        || anchorY + screenRadius[node] < 0 || anchorY - screenRadius[node] > height) continue;
      onscreenCount += 1;
      const priorityReveal = selected === node || hovered === node || Boolean(searchQuery && searchMatches[node]);
      if (!priorityReveal && zoom < labelTierZoom[articleLabel.tier]) continue;
      if (labelBoxSize < articleLabel.minimumBoxSize) continue;
      articleLabel.label.hidden = false;
      articleLabel.label.dataset.obscured = "false";
      articleLabel.label.dataset.selected = String(selected === articleLabel.node);
      articleLabel.label.style.left = `${anchorX - labelBoxSize / 2}px`;
      articleLabel.label.style.top = `${anchorY - labelBoxSize / 2}px`;
      articleLabel.label.style.width = `${labelBoxSize}px`;
      articleLabel.label.style.height = `${labelBoxSize}px`;
      articleLabel.label.style.fontSize = `${minimumLabelFontSize}px`;
      articleLabel.label.style.opacity = searchQuery && !searchMatches[articleLabel.node] && selected !== articleLabel.node ? ".3" : "1";
      visibleArticleLabels.push(articleLabel);
    }
    articleLabelLayer.dataset.labelCount = String(articleLabels.length);
    articleLabelLayer.dataset.onscreenLabelCount = String(onscreenCount);
    articleLabelLayer.dataset.visibleLabelCount = String(visibleArticleLabels.length);
    articleLabelLayer.dataset.fadedLabelCount = String(onscreenCount - visibleArticleLabels.length);
    articleLabelLayer.dataset.minimumFontSize = `${minimumLabelFontSize}px`;
  }

  function bindAttribute(programValue, buffer, name, size, values, usage = gl.DYNAMIC_DRAW) {
    const location = gl.getAttribLocation(programValue, name);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, values, usage);
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
  }

  function draw(time = performance.now()) {
    frameRequested = false;
    if (focusAnimating) {
      const progress = Math.min(1, (time - focusStarted) / 430);
      const eased = 1 - Math.pow(1 - progress, 3);
      for (let axis = 0; axis < 3; axis += 1) focusCenter[axis] = focusFrom[axis] + (focusTo[axis] - focusFrom[axis]) * eased;
      focusAnimating = progress < 1;
    }
    project();
    refreshColors();
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.useProgram(edgeProgram);
    bindAttribute(edgeProgram, structuralPositionBuffer, "a_position", 3, structuralClip);
    bindAttribute(edgeProgram, structuralColorBuffer, "a_color", 4, structuralColors);
    gl.drawArrays(gl.LINES, 0, structuralEdgeCount * 2);

    bindAttribute(edgeProgram, edgePositionBuffer, "a_position", 3, edgeClip);
    bindAttribute(edgeProgram, edgeColorBuffer, "a_color", 4, edgeColors);
    gl.drawArrays(gl.LINES, 0, edgeCount * 2);

    gl.useProgram(nodeProgram);
    bindAttribute(nodeProgram, nodePositionBuffer, "a_position", 3, nodeClip);
    bindAttribute(nodeProgram, nodeSizeBuffer, "a_size", 1, nodeSizes);
    bindAttribute(nodeProgram, nodeColorBuffer, "a_color", 4, nodeColors);
    gl.uniform4fv(gl.getUniformLocation(nodeProgram, "u_border"), cssColor("--paper", 1));
    gl.drawArrays(gl.POINTS, 0, nodeCount);
    rendered = true;
    if (focusAnimating) requestDraw();
  }

  function requestDraw() {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(draw);
  }

  function resize() {
    const bounds = stage.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    pixelRatio = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    requestDraw();
  }

  function hitTest(clientX, clientY) {
    const bounds = canvas.getBoundingClientRect();
    const x = clientX - bounds.left;
    const y = clientY - bounds.top;
    let best = -1;
    let bestDistance = Infinity;
    for (let index = 0; index < nodeCount; index += 1) {
      const distance = Math.hypot(x - screenX[index], y - screenY[index]);
      if (distance > Math.max(5, screenRadius[index] + 3)) continue;
      if (distance < bestDistance) { best = index; bestDistance = distance; }
    }
    return best;
  }

  function showTooltip(index, clientX, clientY) {
    const tooltip = document.querySelector("[data-graph-tooltip]");
    if (index < 0) { tooltip.hidden = true; return; }
    const node = nodes[index];
    tooltip.innerHTML = `<strong>${node.title}</strong><span>${node.words.toLocaleString()} words · ${node.degree.toLocaleString()} connections</span>`;
    const bounds = stage.getBoundingClientRect();
    tooltip.style.left = `${Math.min(width - 230, Math.max(8, clientX - bounds.left + 14))}px`;
    tooltip.style.top = `${Math.min(height - 58, Math.max(8, clientY - bounds.top + 14))}px`;
    tooltip.hidden = false;
  }

  function selectNode(index) {
    if (index < 0) return;
    selected = index;
    hovered = -1;
    document.querySelector("[data-graph-tooltip]").hidden = true;
    focusFrom = [...focusCenter];
    focusTo = [nodes[index].x, nodes[index].y, nodes[index].z];
    focusStarted = performance.now();
    focusAnimating = true;
    const node = nodes[index];
    if (goButton) goButton.disabled = false;
    document.querySelector("[data-graph-selection]").innerHTML = `<div><strong>${node.title}</strong><span>${node.words.toLocaleString()} words · ${node.degree.toLocaleString()} directed connections</span></div><a href="${node.href}">Open article</a>`;
    requestDraw();
  }

  function resetView() {
    selected = -1;
    hovered = -1;
    yaw = 0;
    zoom = 1;
    focusFrom = [...focusCenter];
    focusTo = [...baseCenter];
    focusStarted = performance.now();
    focusAnimating = true;
    if (goButton) goButton.disabled = true;
    document.querySelector("[data-graph-selection]").innerHTML = "<span>Select a circle to inspect and center an article.</span>";
    document.querySelector("[data-graph-tooltip]").hidden = true;
    requestDraw();
  }

  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    canvas.setPointerCapture(event.pointerId);
    pointerStart = { x: event.clientX, y: event.clientY, center: [...focusCenter], scale: projectionScale, yaw };
    pointerMoved = false;
    canvas.classList.add("is-dragging");
  });
  canvas.addEventListener("pointermove", (event) => {
    if (pointerStart) {
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      if (Math.hypot(dx, dy) > 4) pointerMoved = true;
      if (pointerMoved) {
        focusAnimating = false;
        const cosine = Math.cos(pointerStart.yaw);
        const sine = Math.sin(pointerStart.yaw);
        focusCenter[0] = pointerStart.center[0] + (-cosine * dx + sine * dy) / pointerStart.scale;
        focusCenter[1] = pointerStart.center[1] + (sine * dx + cosine * dy) / pointerStart.scale;
        focusFrom = [...focusCenter];
        focusTo = [...focusCenter];
        document.querySelector("[data-graph-tooltip]").hidden = true;
        requestDraw();
      }
      return;
    }
    const next = rendered ? hitTest(event.clientX, event.clientY) : -1;
    if (next !== hovered) { hovered = next; requestDraw(); }
    showTooltip(next, event.clientX, event.clientY);
    canvas.style.cursor = next >= 0 ? "pointer" : "grab";
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!pointerStart) return;
    canvas.dataset.lastGesture = pointerMoved ? "pan" : "click";
    const hit = !pointerMoved && event.button === 0 ? hitTest(event.clientX, event.clientY) : -1;
    canvas.dataset.lastHit = String(hit);
    if (hit >= 0) selectNode(hit);
    pointerStart = null;
    canvas.classList.remove("is-dragging");
  });
  canvas.addEventListener("pointercancel", () => {
    pointerStart = null;
    canvas.classList.remove("is-dragging");
  });
  canvas.addEventListener("pointerleave", () => {
    if (!pointerStart) { hovered = -1; document.querySelector("[data-graph-tooltip]").hidden = true; requestDraw(); }
  });
  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoom = Math.max(0.28, Math.min(maximumZoom(), zoom * Math.exp(-event.deltaY * 0.001)));
    requestDraw();
  }, { passive: false });
  canvas.addEventListener("keydown", (event) => {
    const step = 0.14;
    if (event.key === "ArrowLeft") yaw -= step;
    else if (event.key === "ArrowRight") yaw += step;
    else if (event.key === "ArrowUp") zoom = Math.min(maximumZoom(), zoom * 1.25);
    else if (event.key === "ArrowDown") zoom = Math.max(0.28, zoom / 1.25);
    else if (event.key === "+" || event.key === "=") zoom = Math.min(maximumZoom(), zoom * 1.25);
    else if (event.key === "-" || event.key === "_") zoom = Math.max(0.28, zoom / 1.25);
    else if (event.key === "Escape") { resetView(); event.preventDefault(); return; }
    else return;
    event.preventDefault(); requestDraw();
  });

  document.querySelectorAll("[data-graph-rotate]").forEach((button) => button.addEventListener("click", () => {
    const direction = button.dataset.graphRotate;
    if (direction === "left") yaw -= 0.18;
    if (direction === "right") yaw += 0.18;
    requestDraw();
  }));
  document.querySelectorAll("[data-graph-zoom]").forEach((button) => button.addEventListener("click", () => {
    zoom = Math.max(0.28, Math.min(maximumZoom(), zoom * (button.dataset.graphZoom === "in" ? 1.4 : 1 / 1.4)));
    requestDraw();
  }));
  document.querySelectorAll("[data-graph-reset]").forEach((button) => button.addEventListener("click", resetView));
  if (goButton) goButton.addEventListener("click", () => {
    if (selected >= 0) window.location.href = nodes[selected].href;
  });
  if (searchInput) searchInput.addEventListener("input", updateSearch);
  new ResizeObserver(resize).observe(stage);
  new MutationObserver(() => requestDraw()).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  resize();
  updateSearch();
})();
