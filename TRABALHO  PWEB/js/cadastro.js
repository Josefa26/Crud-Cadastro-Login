const form = document.getElementById("cadastro-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmesenha = document.getElementById("confirmar").value;

    if (senha !== confirmesenha) {
        alert("Senha errada. Por favor, tente novamente. ");
        return;
    }

    if ((senha, confirmesenha <= 7)){
        alert("Senha precisa ter 8 caracteres ou mais!");
        alert("Confirme sua senha.");
        return;
    }
    
document.querySelector("#button-form").addEventListener("click", (w) =>{
    w.preventDefault();

let nome = document.querySelector("#Primeiro nome").value;
let sobrenome = document.querySelector("#Sobrenome").value;
let login = document.querySelector("#E-mail").value;
let numero = document.querySelector("#Celular").value;
let senha = document.querySelector("#Senha").value;

});

let confirme = document.querySelector("#Confirme sua senha");
salvar (nome, sobrenome, login, numero, senha, confirme)

function salvar(Pn, S, E, C, Se, Cs){
    let db = JSON.parse(localStorage.getItem("user") || "[]")

    let user = {
        id: db.length + 1,
        nome: Pn,
        sobrenome: S,
        login: E,
        numero: C,
        senha: Se,
        confirme: Cs,
    };

    db.push(user)
    localStorage.setItem("user, JSON.stringify(db)");
    location.href = "cadastro,html"
}
});