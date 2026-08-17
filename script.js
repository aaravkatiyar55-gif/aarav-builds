const root = document.body;
const themeButton = document.querySelector('.theme-toggle');
const readingButton = document.querySelector('.reading-toggle');
const noteButton = document.querySelector('.note-button');
const noteStatus = document.querySelector('.note-status');
const filterButtons = document.querySelectorAll('.filter-button');
const projectRows = document.querySelectorAll('[data-project-type]');
const filterStatus = document.querySelector('.filter-status');

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

noteButton.addEventListener('click', () => {
  const current = document.querySelector('blockquote');
  const currentText = current.textContent.replace(/[“”]/g, '');
  const options = notes.filter((note) => note !== currentText);
  const nextNote = options[Math.floor(Math.random() * options.length)];
  current.textContent = `“${nextNote}”`;
  noteStatus.textContent = 'Note updated.';
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const isCurrent = item === button;
      item.classList.toggle('is-active', isCurrent);
      item.setAttribute('aria-pressed', String(isCurrent));
    });

    projectRows.forEach((row) => {
      const shouldShow = filter === 'all' || row.dataset.projectType === filter;
      row.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;
  });
});
