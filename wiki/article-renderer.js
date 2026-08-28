(() => {
  const slug = document.body.dataset.article;
  const article = window.deepArticles?.[slug];
  if (!article) {
    document.body.innerHTML = '<main class="content"><div class="page"><h1>Article unavailable</h1><p>This local article has not been registered.</p></div></main>';
    return;
  }

  document.title = `${article.title} · Fractured Peace`;
  const sectionLinks = article.sections.map(section => `<a href="#${section.id}">${section.nav || section.title}</a>`).join("");
  const contents = article.sections.map(section => `<li><a href="#${section.id}">${section.title}</a></li>`).join("");
  const sections = article.sections.map(section => `<h2 id="${section.id}">${section.title}</h2>${section.html}`).join("");
  const related = (article.related || []).map(item => `<a href="${item.href}"><small>${item.kicker}</small><strong>${item.label}</strong></a>`).join("");
  const sources = article.sources.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join("");
  const facts = article.facts.map(([term, value]) => `<div class="row"><dt>${term}</dt><dd>${value}</dd></div>`).join("");
  const portrait = article.portrait ? `<div class="infobox-map biography-portrait"><a href="${article.portrait.src}"><img src="${article.portrait.src}" alt="${article.portrait.alt}"></a><small>${article.portrait.caption}</small></div>` : "";
  const flag = article.flag ? `<div class="infobox-map flag-display"><a href="${article.flag.src}"><img src="${article.flag.src}" alt="${article.flag.alt}"></a><small>${article.flag.caption}</small></div>` : "";
  const landscape = article.landscape ? `<div class="infobox-map article-landscape"><a href="${article.landscape.src}"><img src="${article.landscape.src}" alt="${article.landscape.alt}"></a><small>${article.landscape.caption}</small></div>` : "";
  const poster = article.poster ? `<div class="infobox-map poster-display"><a href="${article.poster.src}"><img src="${article.poster.src}" alt="${article.poster.alt}"></a><small>${article.poster.caption}</small></div>` : "";

  document.body.innerHTML = `
    <div class="utility-bar"><span>Local reference edition · deep archive</span><div class="utility-links"><a href="index.html">Main page</a><a href="timeline.html">Chronology</a></div></div>
    <header class="site-header"><a class="brand" href="index.html"><span class="brand-mark"></span><span class="brand-copy"><strong>Fractured Peace</strong><small>World archive & encyclopedia</small></span></a><div class="search"><input data-search type="search" aria-label="Search" placeholder="Search countries, events, people…"><button>⌕</button><div class="search-results" data-search-results></div></div><div class="header-actions"><button class="icon-button mobile-nav" data-mobile-nav>☰</button><button class="icon-button random-button" data-random>Random</button><button class="icon-button" data-theme-toggle>◐</button></div></header>
    <div class="layout"><aside class="sidebar"><nav><section class="nav-section"><h2 class="nav-heading">Archive</h2><a data-nav href="index.html">Main Page</a><a data-nav href="world.html">The World Order</a><a data-nav href="countries.html">List of Countries</a><a data-nav href="timeline.html">Timeline</a></section><section class="nav-section"><h2 class="nav-heading">This article</h2>${sectionLinks}</section><section class="canon-key"><strong>Canon status</strong><p>${article.canon}</p></section></nav></aside>
    <main class="content"><div class="page article"><div class="breadcrumbs"><a href="index.html">Archive</a> / ${article.category} / ${article.title}</div><div class="page-header"><div><span class="eyebrow">${article.eyebrow}</span><h1>${article.title}</h1></div><div class="page-tools"><button data-copy-link>Share</button><button data-print>Print</button></div></div><div class="article-layout"><article class="article-body"><p class="lead">${article.lead}</p><details class="toc" open><summary>Contents</summary><ol>${contents}</ol></details>${sections}${related ? `<div class="related-grid">${related}</div>` : ""}<section class="source-box"><h3>Source basis</h3><ul>${sources}</ul></section><div class="article-footer">Categories: ${article.categories.join(" · ")}</div></article><aside class="infobox"><div class="infobox-title"><small>${article.infoboxKicker}</small><strong>${article.infoboxTitle || article.title}</strong></div>${flag || poster || portrait || landscape}<dl>${facts}</dl></aside></div></div><footer class="site-footer"><div class="site-footer-inner"><span>Fractured Peace Archive · Deep reference edition</span><span><span data-year></span></span></div></footer></main></div>`;
})();
