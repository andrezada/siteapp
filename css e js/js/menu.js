// js/menu.js
export function initMenu() {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('nav ul');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}
