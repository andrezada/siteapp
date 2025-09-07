
  const hamburger = document.getElementById('hamburger-menu');
  const navUl = document.querySelector('nav ul');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
  });

      document.querySelector('.conta').addEventListener('click', function() {
      document.querySelector('.login').style.visibility = 'visible';
      });

      document.getElementById('fechar').addEventListener('click', function() {
      document.querySelector('.login').style.visibility = 'hidden';
      });