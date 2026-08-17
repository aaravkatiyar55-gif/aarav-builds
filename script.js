const themeStorageKey = 'aarav-builds-theme';
const themeButton = document.querySelector('.theme-toggle');
const themeStatus = document.querySelector('.theme-status');

function applyTheme(theme) {
  const isDark = theme === 'dark';

  document.body.classList.toggle('dark', isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
  themeButton.textContent = `Use ${isDark ? 'light' : 'dark'} theme`;
}

function readTheme() {
  return localStorage.getItem(themeStorageKey) === 'dark' ? 'dark' : 'light';
}

function toggleTheme() {
  const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';

  localStorage.setItem(themeStorageKey, nextTheme);
  applyTheme(nextTheme);
  themeStatus.textContent = `Using ${nextTheme} theme.`;
}

if (themeButton && themeStatus) {
  applyTheme(readTheme());
  themeButton.addEventListener('click', toggleTheme);
}
