// DEFININDO AS VARIÁVEIS

let body = document.querySelector("body");
let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let form = document.querySelector("#login-form");
let usuarioCerto = "admin";
let senhaCerta = "123";
let mensagem = document.querySelector("#mensagem");
let checkbox = document.querySelector("#mostrar-senha");
let darkMode = document.querySelector("#dark-mode");

// FIM DAS VARIÁVEIS

function login(e) {
  e.preventDefault();

  mensagem.className = "";

  if (usuario.value == usuarioCerto && senha.value == senhaCerta) {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.classList.toggle("sucesso");
    form.reset();
  } else {
    mensagem.textContent = "Usuário ou senha incorretos!";
    mensagem.classList.toggle("erro");
  }

  // REMOVENDO A MENSAGEM DE FEEDBACK APÓS X SEGUNDOS

  setTimeout(() => {
    mensagem.className = "";
  }, 2000);
}

// MOSTRANDO OU OCULTANDO A SENHA DO USUÁRIO
checkbox.addEventListener("click", () => {
  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
});

// ATIVANDO OU DESATIVANDO DARK MODE
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
  form.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    darkMode.textContent = "🌞";
  } else {
    darkMode.textContent = "🌙";
  }
});

// ESCUTANDO O EVENTO DE ENVIAR O FORM
form.addEventListener("submit", login);
