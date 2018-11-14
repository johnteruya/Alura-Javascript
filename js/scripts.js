//MANIPULANDO ELEMENTOS DO HTML PELO JS
var titulo = document.querySelector(".titulo");
titulo.textContent="Nome da Tabela";

//CRIANDO BOTÃO DE INSERÇÃO
var botaoAdicionar = document.querySelector("#adicionar-nome");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    









});

//VERIFICADOR DE CAMPO NULO
function required(){
    var vazio = document.forms["form"]["nome"].value;
        if (vazio == ""){
            alert("Por Favor insera um valor");
            return false;
        } else {
            alert('OK!');
            return true; 
        }
}
