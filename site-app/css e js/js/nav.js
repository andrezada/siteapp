// css e js/js/nav.js
document.addEventListener('DOMContentLoaded', function() {
    const abrirFecharBtn = document.getElementById('abirfechar');
    const menuLateral = document.getElementById('menulateral');
    
    if (abrirFecharBtn && menuLateral) {
        abrirFecharBtn.addEventListener('click', function() {
            menuLateral.classList.toggle('ativo');
            abrirFecharBtn.classList.toggle('ativo');
            
            // Atualiza a seta conforme o estado do menu
            if (menuLateral.classList.contains('ativo')) {
                abrirFecharBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
            } else {
                abrirFecharBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            }
        });
    }
});