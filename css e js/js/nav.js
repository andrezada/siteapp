const menu = document.getElementById('menulateral');
  const btn = document.getElementById('abrirefechar');
  let aberto = true;
  btn.onclick = function() {
    aberto = !aberto;
    if (aberto) {
      menu.style.left = '0';
    } else {
      menu.style.left = '-25%';
    }
  };