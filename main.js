// DEFININDO AS VARIÁVEIS

let usuario = document.querySelector("#usuario");
let senha = document.querySelector("#senha");
let form = document.querySelector("#login-form");
let usuarioCerto = "admin";
let senhaCerta = "123";

// FIM DAS VARIÁVEIS

function login(e) {
  e.preventDefault();

  if (usuario.value == usuarioCerto && senha.value == senhaCerta) {
    alert("Login realizado com sucesso!");
    form.reset();
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// ESCUTANDO O EVENTO DE ENVIAR O FORM
form.addEventListener("submit", login);
