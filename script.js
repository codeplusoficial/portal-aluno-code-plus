const formulario = document.querySelector("form");
const INome = document.querySelector(".name");
const IUserName = document.querySelector(".userName")
const IEmail = document.querySelector(".email");
const ISenha = document.querySelector(".password");
const ITel = document.querySelector(".phone");

function cadastrar() {
    fetch("http://localhost:8080/api/aluno",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                
                name: INome.value,
                userName: IUserName.value,
                email: IEmail.value,
                password: ISenha.value,
                phone: ITel.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

}

function limpar() {
    INome.value = "";
    IEmail.value = "";
    ISenha.value = "";
    ITel.value = "";
    IUserName.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    limpar();
});