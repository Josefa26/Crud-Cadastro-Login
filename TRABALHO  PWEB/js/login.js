document.querySelector("#logar").addEventListener("click", (e) => {
    e.preventDefault();
    entrar();
  });
  
  function entrar() {
    let nome = document.querySelector("#email");
    let senha = document.querySelector("#senha");
    let confirmaSenha = document.querySelector("#confirma-senha");

    let listaUser = [];
    let nomeValido = {
      login: "",
      senha: "",
      confirmaSenha: "",
    };

    listaUser = JSON.parse(localStorage.getItem("usuarios"));
    listaUser.forEach(elemento => {
      if (
        nome.value === elemento.login &&
        senha.value === elemento.senha &&
        confirmaSenha.value === elemento.confirmaSenha
      ) {
        nomeValido = {
          id: elemento.id,
          login: elemento.login,
          senha: elemento.senha,
          confirmaSenha: elemento.confirmaSenha,
        };
      }
    });
    if (
      nome.value === nomeValido.login &&
      senha.value === usuarioValido.senha &&
      confirmaSenha.value === nomeValido.confirmaSenha
    ) {
      alert("Login realizado!");
      alert("Seja bem vindo!");
      saveSession(nomeValido.id);
      window.location.href = "dash.html";
    } else {
      alert("Nome não cadastrado!");
      alert("Faça o cadastro acessando o link a baixo!");
    }
  }
  
  function saveSession(data) {
    if (saveSession) {
      localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logado", JSON.stringify(data));
  }
  
  const inputs = document.querySelectorAll(".input");
  const button = document.querySelector(".login__button");
  
  const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span-active");
  };
  
  const handleFocusOut = ({ target }) => {
    if (target.value === "") {
      const span = target.previousElementSibling;
      span.classList.remove("span-active");
    }
  };
  
  const handleChange = () => {
    const [nome, senha, confirmaSenha] = inputs;
  
    if (
      nome.value &&
      confirmaSenha.value.length >= 8 &&
      senha.value.length >= 8
    ) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "");
    }
  };
 
  inputs.forEach((input) => input.addEventListener("focus", handleFocus));
  inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
  inputs.forEach((input) => input.addEventListener("input", handleChange));