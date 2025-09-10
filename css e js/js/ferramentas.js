// css e js/js/ferramentas.js
document.addEventListener('DOMContentLoaded', function() {
    const btnEnviarGabarito = document.getElementById('btn-enviar-gabarito');
    const btnPlanilhas = document.getElementById('btn-minhas-planilhas');
    const btnTurmas = document.getElementById('btn-minhas-turmas');
    const btnVoltar = document.getElementById('btn-voltar');
    
    const containerEnviarGabarito = document.getElementById('container-enviar-gabarito');
    const containerPlanilhas = document.getElementById('container-planilhas');
    const containerTurmas = document.getElementById('container-turmas');
    const telaInicial = document.querySelector('.tela-inicial');
    
    const frameGabarito = document.getElementById('frame-enviar-gabarito');
    const carregandoGabarito = document.getElementById('carregando-gabarito');

    // Esconder todos os containers e mostrar a tela inicial
    function mostrarTelaInicial() {
        telaInicial.style.display = 'flex';
        containerEnviarGabarito.style.display = 'none';
        containerPlanilhas.style.display = 'none';
        containerTurmas.style.display = 'none';
    }

    // Mostrar um container específico
    function mostrarContainer(container) {
        telaInicial.style.display = 'none';
        containerEnviarGabarito.style.display = 'none';
        containerPlanilhas.style.display = 'none';
        containerTurmas.style.display = 'none';
        
        container.style.display = 'block';
    }

    // Prevenir redimensionamento do iframe
    function prevenirRedimensionamento() {
        if (!frameGabarito) return;
        
        // Força tamanhos fixos
        frameGabarito.style.width = '100%';
        frameGabarito.style.height = '100vh';
        frameGabarito.style.minHeight = '100vh';
        frameGabarito.style.maxHeight = '100vh';
        frameGabarito.style.overflow = 'hidden';
    }

    // Monitorar estabilidade do iframe
    function monitorarIframe() {
        const alturaInicial = frameGabarito.offsetHeight;
        let checkCount = 0;
        const maxChecks = 10;
        
        const checkInterval = setInterval(() => {
            if (frameGabarito.offsetHeight < alturaInicial * 0.8 && checkCount < maxChecks) {
                prevenirRedimensionamento();
                checkCount++;
            } else if (checkCount >= maxChecks) {
                clearInterval(checkInterval);
            }
        }, 500);
    }

    // Event listeners para os botões do menu
    if (btnEnviarGabarito) {
        btnEnviarGabarito.addEventListener('click', function() {
            mostrarContainer(containerEnviarGabarito);
            
            // Mostra o indicador de carregamento
            carregandoGabarito.style.display = 'flex';
            frameGabarito.style.display = 'none';
            
            // Carrega o aplicativo de enviar gabarito do caminho correto
            if (frameGabarito.getAttribute('data-carregado') !== 'true') {
                frameGabarito.src = '../frontend/pagArquivos/pgArquivos.html';
                frameGabarito.setAttribute('data-carregado', 'true');
            } else {
                // Se já foi carregado antes, apenas mostra
                carregandoGabarito.style.display = 'none';
                frameGabarito.style.display = 'block';
                prevenirRedimensionamento();
            }
        });
    }

    if (btnPlanilhas) {
        btnPlanilhas.addEventListener('click', function() {
            mostrarContainer(containerPlanilhas);
        });
    }

    if (btnTurmas) {
        btnTurmas.addEventListener('click', function() {
            mostrarContainer(containerTurmas);
        });
    }

    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            mostrarTelaInicial();
            // Para o conteúdo do iframe ao voltar
            frameGabarito.src = 'about:blank';
            frameGabarito.setAttribute('data-carregado', 'false');
        });
    }

    // Quando o iframe terminar de carregar
    frameGabarito.addEventListener('load', function() {
        // Esconde o indicador de carregamento e mostra o iframe
        carregandoGabarito.style.display = 'none';
        frameGabarito.style.display = 'block';
        
        // Previne problemas de redimensionamento
        prevenirRedimensionamento();
        monitorarIframe();
        
        // Ajusta periodicamente (útil para conteúdo dinâmico)
        setInterval(prevenirRedimensionamento, 1000);
    });

    // Inicializar mostrando a tela inicial
    mostrarTelaInicial();
});