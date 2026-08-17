const root = document.body;
const themeButton = document.querySelector('.theme-toggle');
const readingButton = document.querySelector('.reading-toggle');
const resetButton = document.querySelector('.preferences-reset');
const preferencesStatus = document.querySelector('.preferences-status');
const noteButton = document.querySelector('.note-button');
const noteStatus = document.querySelector('.note-status');
const filterButtons = document.querySelectorAll('.filter-button');
const projectRows = document.querySelectorAll('[data-project-type]');
const filterStatus = document.querySelector('.filter-status');
const sectionLinks = document.querySelectorAll('[data-section-link]');
const supportedFilters = new Set(['all', 'browser', 'slack']);

const notes = [
  'Small features count when they solve a real problem.',
  'A useful test is better than a confident guess.',
  'Good design helps the next person understand what to do.',
  'Learning gets easier when the project stays explainable.'
];

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.classList.toggle('dark', isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
}

function applyReadingSize(isComfortable) {
  root.classList.toggle('comfortable-copy', isComfortable);
  readingButton.setAttribute('aria-pressed', String(isComfortable));
  readingButton.textContent = isComfortable ? 'Text −' : 'Text +';
}

const savedTheme = localStorage.getItem('aarav-builds-theme');
applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
applyReadingSize(localStorage.getItem('aarav-builds-reading-size') === 'comfortable');

themeButton.addEventListener('click', () => {
  const nextTheme = root.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('aarav-builds-theme', nextTheme);
  applyTheme(nextTheme);
});

readingButton.addEventListener('click', () => {
  const nextComfortableSize = !root.classList.contains('comfortable-copy');
  localStorage.setItem('aarav-builds-reading-size', nextComfortableSize ? 'comfortable' : 'default');
  applyReadingSize(nextComfortableSize);
});

resetButton.addEventListener('click', () => {
  localStorage.removeItem('aarav-builds-theme');
  localStorage.removeItem('aarav-builds-reading-size');
  applyTheme('light');
  applyReadingSize(false);
  preferencesStatus.textContent = 'Theme and text size reset to the default view.';
});

noteButton.addEventListener('click', () => {
  const current = document.querySelector('blockquote');
  const currentText = current.textContent.replace(/[“”]/g, '');
  const options = notes.filter((note) => note !== currentText);
  const nextNote = options[Math.floor(Math.random() * options.length)];
  current.textContent = `“${nextNote}”`;
  noteStatus.textContent = 'Note updated.';
});

function getRequestedFilter() {
  const requestedFilter = new URLSearchParams(window.location.search).get('filter');
  return supportedFilters.has(requestedFilter) ? requestedFilter : 'all';
}

function applyProjectFilter(filter, shouldUpdateUrl = false) {
  let visibleCount = 0;

  filterButtons.forEach((button) => {
    const isCurrent = button.dataset.filter === filter;
    button.classList.toggle('is-active', isCurrent);
    button.setAttribute('aria-pressed', String(isCurrent));
  });

  projectRows.forEach((row) => {
    const shouldShow = filter === 'all' || row.dataset.projectType === filter;
    row.hidden = !shouldShow;
    if (shouldShow) visibleCount += 1;
  });

  filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;

  if (shouldUpdateUrl) {
    const url = new URL(window.location.href);
    if (filter === 'all') {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', filter);
    }
    window.history.pushState({ filter }, '', url);
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyProjectFilter(button.dataset.filter, true);
  });
});

window.addEventListener('popstate', () => {
  applyProjectFilter(getRequestedFilter());
});

applyProjectFilter(getRequestedFilter());

function updateCurrentSection(sectionId) {
  sectionLinks.forEach((link) => {
    const isCurrent = link.dataset.sectionLink === sectionId;
    if (isCurrent) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const currentEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (currentEntry) updateCurrentSection(currentEntry.target.id);
    },
    { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.4, 0.7] }
  );

  document.querySelectorAll('main > section[id]').forEach((section) => {
    sectionObserver.observe(section);
  });
}


filterButtons.forEach((button) => {
  button.setAttribute('aria-controls', 'project-list');
});
