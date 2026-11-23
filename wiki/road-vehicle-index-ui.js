(() => {
  const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
  const months = 'january february march april may june july august september october november december'.split(' ');
  const phases = { early: 2, spring: 3, mid: 6, summer: 6, autumn: 9, fall: 9, late: 10, winter: 11 };
  const label = cell => cell?.textContent.replace(/\s+/g, ' ').trim() ?? '';

  function dateKey(text) {
    // The first named year is the displayed milestone or range start, not a production start.
    const year = /\b(?:1[5-9]\d{2}|20\d{2})(?!\d)/i.exec(text.replace(/([a-z])(?=(?:1[5-9]\d{2}|20\d{2}))/gi, '$1 '));
    if (!year) return null;
    const prefix = year.input.slice(0, year.index).toLowerCase();
    const qualifier = /\b([a-z]+)[\s–-]*$/.exec(prefix)?.[1];
    const month = months.indexOf(qualifier);
    return Number(year[0]) * 12 + (month >= 0 ? month : phases[qualifier] ?? 0);
  }

  function start() {
    const input = document.getElementById('vehicle-index-filter');
    const count = document.getElementById('vehicle-index-count');
    if (!input || !count) return;
    const catalogue = input.closest('.vehicle-index-controls')?.nextElementSibling?.querySelector('.vehicle-index-table');
    const tbody = catalogue?.tBodies[0];
    const headers = [...(catalogue?.tHead?.rows[0]?.cells ?? [])];
    const allRows = [...document.querySelectorAll('.vehicle-index-table tbody tr')];
    const searchable = allRows.map(row => [row, row.textContent.toLocaleLowerCase()]);
    const filter = () => {
      const terms = input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
      let shown = 0;
      for (const [row, text] of searchable) {
        row.hidden = !terms.every(term => text.includes(term));
        if (!row.hidden) shown++;
      }
      count.textContent = shown + ' of ' + allRows.length + ' entries';
    };
    input.addEventListener('input', filter);

    if (!tbody || headers.length === 0) return;
    const rows = [...tbody.rows].map((row, index) => {
      const cells = [...row.cells].map(label);
      return { row, index, cells, date: dateKey(cells[2]) };
    });
    const css = document.createElement('style');
    css.textContent = [
      '.vehicle-index-sort{display:inline-flex;align-items:baseline;gap:.35em;color:inherit;font:inherit;text-align:inherit;background:none;border:0;padding:.2em .1em;cursor:pointer}',
      '.vehicle-index-sort:hover{text-decoration:underline}',
      '.vehicle-index-sort:focus-visible{outline:2px solid currentColor;outline-offset:2px}',
      '.vehicle-index-sort-indicator{min-width:1em}'
    ].join('\n');
    document.head.append(css);

    let activeColumn = -1;
    let direction = 1;
    const controls = headers.map((header, column) => {
      const title = label(header);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'vehicle-index-sort';
      const indicator = document.createElement('span');
      indicator.className = 'vehicle-index-sort-indicator';
      indicator.setAttribute('aria-hidden', 'true');
      indicator.textContent = '↕';
      button.append(title, indicator);
      header.scope = 'col';
      header.replaceChildren(button);
      const control = { header, button, indicator, title };
      button.addEventListener('click', () => {
        direction = activeColumn === column ? -direction : 1;
        activeColumn = column;
        const ordered = rows.slice().sort((a, b) => {
          // Unknown dates and blank fields stay at the bottom in either direction.
          const left = column === 2 ? a.date : a.cells[column] || null;
          const right = column === 2 ? b.date : b.cells[column] || null;
          if ((left === null) !== (right === null)) return left === null ? 1 : -1;
          const order = left === null ? 0 : column === 2 ? left - right : collator.compare(left, right);
          return direction * order || a.index - b.index;
        });
        const reordered = document.createDocumentFragment();
        for (const entry of ordered) reordered.append(entry.row);
        tbody.append(reordered);
        updateControls();
      });
      return control;
    });

    function updateControls() {
      controls.forEach(({ header, button, indicator, title }, column) => {
        if (activeColumn !== column) {
          header.removeAttribute('aria-sort');
          indicator.textContent = '↕';
          button.setAttribute('aria-label', 'Sort by ' + title + ', ascending');
        } else {
          header.setAttribute('aria-sort', direction === 1 ? 'ascending' : 'descending');
          indicator.textContent = direction === 1 ? '↑' : '↓';
          button.setAttribute('aria-label', 'Sort by ' + title + ', ' + (direction === 1 ? 'descending' : 'ascending'));
        }
      });
    }
    updateControls();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
