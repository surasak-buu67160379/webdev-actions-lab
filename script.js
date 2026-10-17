// ปุ่ม Say Hello
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

// ปุ่มสลับธีม (Exercise 3)
const themeBtn = document.querySelector('#themeBtn');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  themeBtn.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeBtn.setAttribute('aria-pressed', String(isDark));
}

let saved = null;
try {
  saved = localStorage.getItem('theme');
} catch (e) {
  // ใช้ localStorage ไม่ได้ ก็ข้ามไป
}
applyTheme(saved === 'dark' ? 'dark' : 'light');

themeBtn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'light'
    : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    // ไม่เป็นไร ธีมยังสลับได้ แค่ไม่จำค่า
  }
});