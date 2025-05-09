const btn = document.getElementById('themeBtn');
const icon = document.getElementById('icon');

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.textContent = '🌙';
  }
};

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Trigger icon animation
  icon.classList.add('rotate');
  setTimeout(() => icon.classList.remove('rotate'), 600);

  // Update icon and save preference
  const isDark = document.body.classList.contains('dark-mode');
  icon.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
