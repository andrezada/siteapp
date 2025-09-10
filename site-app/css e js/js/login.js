// js/login.js
export function initLogin() {
  const contaBtn = document.querySelector('.conta');
  const loginBox = document.querySelector('.login');
  const fecharBtn = document.getElementById('fechar');
  const txtUsuario = document.getElementById('username');
  const txtSenha = document.getElementById('password');
  const btnEnviar = document.getElementById('butao-submit');
  const msgFeedback = document.getElementById('newsletter');

  if (!contaBtn || !loginBox || !fecharBtn || !txtUsuario || !txtSenha || !btnEnviar) return;

  // Abrir login
  contaBtn.addEventListener('click', () => loginBox.classList.add('active'));

  // Fechar login
  fecharBtn.addEventListener('click', () => loginBox.classList.remove('active'));

  // Atualizar botão dinamicamente
  function atualizarBotao() {
    btnEnviar.disabled = !(txtUsuario.value && txtSenha.value);
  }
  txtUsuario.addEventListener('input', atualizarBotao);
  txtSenha.addEventListener('input', atualizarBotao);

  // Função de login
  function entrarConta() {
    const user = txtUsuario.value;
    btnEnviar.disabled = true;
    msgFeedback.innerHTML = `Login ${user} feito com sucesso!`;
    msgFeedback.style.color = "green";
  }

  btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    entrarConta();
  });

  // Inicializa botão desabilitado
  btnEnviar.disabled = true;
}
