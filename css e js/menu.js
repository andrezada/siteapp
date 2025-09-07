
  const hamburger = document.getElementById('hamburger-menu');
  const navUl = document.querySelector('nav ul');
  hamburger.addEventListener('click', function() {
     const ferramentas = document.querySelector('.ferramentas'); 
      if (ferramentas.style.visibility === 'hidden') {
        ferramentas.style.visibility = 'hidden';
      } else {
        ferramentas.style.visibility = 'hidden';
      }
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
  });

      document.querySelector('.conta').addEventListener('click', function() {
      document.querySelector('.login').style.visibility = 'visible';
      });

      document.getElementById('fechar').addEventListener('click', function() {
      document.querySelector('.login').style.visibility = 'hidden';
      });


      document.getElementById('menuferramentas').addEventListener('click', function() {
      const ferramentas = document.querySelector('.ferramentas'); 
      if (ferramentas.style.visibility === 'visible') {
        ferramentas.style.visibility = 'hidden';
      } else {
        ferramentas.style.visibility = 'visible';
      }
      });