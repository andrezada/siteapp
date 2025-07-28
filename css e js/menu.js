
  const hamburger = document.getElementById('hamburger-menu');
  const navUl = document.querySelector('nav ul');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
  });