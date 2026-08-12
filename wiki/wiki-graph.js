(() => {
  const data = window.WIKI_GRAPH_DATA;
  const canvas = document.querySelector("[data-wiki-graph]");
  const stage = document.querySelector("[data-graph-stage]");
  const goButton = document.querySelector("[data-graph-go]");
  const searchInput = document.querySelector("[data-graph-search]");
  const searchStatus = document.querySelector("[data-graph-search-status]");
  const clusterLabelLayer = document.querySelector("[data-graph-cluster-labels]");
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
  const nodeClip = new Float32Array(nodeCount * 3);
  const nodeSizes = new Float32Array(nodeCount);
  const nodeColors = new Float32Array(nodeCount * 4);
  const edgeClip = new Float32Array(edgeCount * 6);
  const edgeColors = new Float32Array(edgeCount * 8);
  const screenX = new Float64Array(nodeCount);
  const screenY = new Float64Array(nodeCount);
  const screenRadius = new Float64Array(nodeCount);
  const titleSearchValues = nodes.map((node) => node.title.toLocaleLowerCase());
  const searchMatches = new Uint8Array(nodeCount);
  const baseCenter = [0, 0, 0];
  const graphHalfWidth = Math.max(...nodes.map((node) => Math.abs(node.x) + node.radius));
  const graphHalfHeight = Math.max(...nodes.map((node) => Math.abs(node.y) + node.radius));
  const clusterMap = new Map();
  for (let index = 0; index < nodeCount; index += 1) {
    const community = nodes[index].community;
    if (!Number.isInteger(community)) continue;
    if (!clusterMap.has(community)) clusterMap.set(community, []);
    clusterMap.get(community).push(index);
  }
  const clusters = [...clusterMap]
    .map(([community, members]) => ({
      community,
      members,
      portal: [...members].sort((left, right) => nodes[right].degree - nodes[left].degree || nodes[right].words - nodes[left].words || nodes[left].href.localeCompare(nodes[right].href))[0]
    }))
    .sort((left, right) => right.members.length - left.members.length || nodes[left.portal].href.localeCompare(nodes[right.portal].href));
  for (const cluster of clusters) {
    const label = document.createElement("span");
    label.className = "graph-cluster-label";
    label.textContent = nodes[cluster.portal].title;
    label.dataset.community = String(cluster.community);
    label.dataset.portal = nodes[cluster.portal].href;
    clusterLabelLayer?.append(label);
    cluster.label = label;
  }

  let width = 1;
  let height = 1;
  let pixelRatio = 1;
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
    const edgeAlpha = searchQuery ? 0.07 : 0.3;
    const origin = cssColor("--graph-origin", edgeAlpha);
    const destination = cssColor("--graph-destination", edgeAlpha);
    for (let edge = 0; edge < edgeCount; edge += 1) {
      const active = selected >= 0 && data.edges[edge].includes(selected);
      writeColor(edgeColors, edge * 8, active ? [...origin.slice(0, 3), 0.85] : origin);
      writeColor(edgeColors, edge * 8 + 4, active ? [...destination.slice(0, 3), 0.85] : destination);
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

  function project() {
    const cosine = Math.abs(Math.cos(yaw));
    const sine = Math.abs(Math.sin(yaw));
    const rotatedHalfWidth = cosine * graphHalfWidth + sine * graphHalfHeight;
    const rotatedHalfHeight = sine * graphHalfWidth + cosine * graphHalfHeight;
    const scale = Math.min(width / (rotatedHalfWidth * 2.12), height / (rotatedHalfHeight * 2.12)) * zoom;
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
    positionClusterLabels();

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

  function overlapArea(left, right, padding = 4) {
    const overlapWidth = Math.min(left.right + padding, right.right) - Math.max(left.left - padding, right.left);
    const overlapHeight = Math.min(left.bottom + padding, right.bottom) - Math.max(left.top - padding, right.top);
    return Math.max(0, overlapWidth) * Math.max(0, overlapHeight);
  }

  function positionClusterLabels() {
    if (!clusterLabelLayer) return;
    const occupied = [];
    const margin = 6;
    for (const cluster of clusters) {
      const label = cluster.label;
      const portal = cluster.portal;
      const anchorX = screenX[portal];
      const anchorY = screenY[portal];
      if (anchorX < -30 || anchorX > width + 30 || anchorY < -30 || anchorY > height + 30) {
        label.hidden = true;
        continue;
      }
      label.hidden = false;
      label.dataset.selected = String(selected >= 0 && nodes[selected].community === cluster.community);
      cluster.labelWidth ||= label.offsetWidth;
      cluster.labelHeight ||= label.offsetHeight;
      const labelWidth = cluster.labelWidth;
      const labelHeight = cluster.labelHeight;
      const offset = Math.max(8, screenRadius[portal] + 7);
      const rightCandidates = [
        [anchorX + offset, anchorY - labelHeight / 2],
        [anchorX + offset * 0.7, anchorY - offset - labelHeight],
        [anchorX + offset * 0.7, anchorY + offset],
        [anchorX - labelWidth / 2, anchorY - offset - labelHeight],
        [anchorX - labelWidth / 2, anchorY + offset],
        [anchorX - labelWidth - offset * 0.7, anchorY - offset - labelHeight],
        [anchorX - labelWidth - offset * 0.7, anchorY + offset],
        [anchorX - labelWidth - offset, anchorY - labelHeight / 2]
      ];
      const candidates = anchorX < width / 2 ? rightCandidates : [...rightCandidates].reverse();
      let best = null;
      for (const [candidateX, candidateY] of candidates) {
        const left = Math.max(margin, Math.min(width - margin - labelWidth, candidateX));
        const top = Math.max(margin, Math.min(height - margin - labelHeight, candidateY));
        const rectangle = { left, top, right: left + labelWidth, bottom: top + labelHeight };
        const displacement = Math.hypot(left - candidateX, top - candidateY);
        const collision = occupied.reduce((sum, other) => sum + overlapArea(rectangle, other), 0);
        const score = collision * 100 + displacement;
        if (!best || score < best.score) best = { ...rectangle, score, collision };
        if (score === 0) break;
      }
      label.style.left = `${best.left}px`;
      label.style.top = `${best.top}px`;
      label.style.opacity = searchQuery && !searchMatches[portal] && !(selected >= 0 && nodes[selected].community === cluster.community)
        ? ".3"
        : best.collision > 0 ? ".68" : "1";
      occupied.push(best);
    }
    clusterLabelLayer.dataset.labelCount = String(clusters.length);
    clusterLabelLayer.dataset.visibleLabelCount = String(clusters.filter((cluster) => !cluster.label.hidden).length);
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
    canvas.setPointerCapture(event.pointerId);
    pointerStart = { x: event.clientX, y: event.clientY, yaw };
    pointerMoved = false;
    canvas.classList.add("is-dragging");
  });
  canvas.addEventListener("pointermove", (event) => {
    if (pointerStart) {
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      if (Math.hypot(dx, dy) > 4) pointerMoved = true;
      if (pointerMoved) {
        yaw = pointerStart.yaw + dx * 0.007;
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
    if (!pointerMoved) selectNode(hitTest(event.clientX, event.clientY));
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
    zoom = Math.max(0.28, Math.min(7, zoom * Math.exp(-event.deltaY * 0.001)));
    requestDraw();
  }, { passive: false });
  canvas.addEventListener("keydown", (event) => {
    const step = 0.14;
    if (event.key === "ArrowLeft") yaw -= step;
    else if (event.key === "ArrowRight") yaw += step;
    else if (event.key === "ArrowUp") zoom = Math.min(7, zoom * 1.14);
    else if (event.key === "ArrowDown") zoom = Math.max(0.28, zoom / 1.14);
    else if (event.key === "+" || event.key === "=") zoom = Math.min(7, zoom * 1.14);
    else if (event.key === "-" || event.key === "_") zoom = Math.max(0.28, zoom / 1.14);
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
    zoom = Math.max(0.28, Math.min(7, zoom * (button.dataset.graphZoom === "in" ? 1.18 : 1 / 1.18)));
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
