document.addEventListener('DOMContentLoaded', function() {
  const joao = document.querySelector('.member img[alt="Foto do João Daniel"]');
  if (joao) {
    joao.style.cursor = 'pointer';
    joao.addEventListener('click', function() {
      alert('Infelizmente o brabo não possui Instagram.');
    });
  }

  const githubZezin = document.querySelector('.githubzezin');
  if (githubZezin) {
    githubZezin.style.cursor = 'pointer';
    githubZezin.addEventListener('click', function() {
      alert('O brabo também não possui GitHub.');
    });
  }
});