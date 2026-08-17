const root = document.body;
const themeButton = document.querySelector('.theme-toggle');
const noteButton = document.querySelector('.note-button');
const noteStatus = document.querySelector('.note-status');

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

const savedTheme = localStorage.getItem('aarav-builds-theme');
applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeButton.addEventListener('click', () => {
  const nextTheme = root.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('aarav-builds-theme', nextTheme);
  applyTheme(nextTheme);
});

noteButton.addEventListener('click', () => {
  const current = document.querySelector('blockquote');
  const currentText = current.textContent.replace(/[“”]/g, '');
  const options = notes.filter((note) => note !== currentText);
  const nextNote = options[Math.floor(Math.random() * options.length)];
  current.textContent = `“${nextNote}”`;
  noteStatus.textContent = 'Note updated.';
});
