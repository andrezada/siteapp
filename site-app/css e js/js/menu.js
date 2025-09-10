// js/menu.js
export function initMenu() {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('nav ul');
  const menuFerramentas = document.getElementById('menuferramentas');
  const ferramentas = document.querySelector('.ferramentas');

  // Proteção: se não existir o menu principal, não roda nada
  if (!hamburger || !navMenu) return;

  // Toggle menu hamburguer
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Toggle menu ferramentas
  if (menuFerramentas && ferramentas) {
    menuFerramentas.addEventListener('click', () => {
      const isVisible = ferramentas.style.visibility === 'visible';
      ferramentas.style.visibility = isVisible ? 'hidden' : 'visible';
    });
  }
}
