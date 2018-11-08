//MÉTODO DE INCLUSÃO
//FUNÇÃO INCLUIR
var botaoAdicionar = document.querySelector("#adicionar-pessoas");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDeafult();
    var form = document.querySelector("#form-adiciona");
    var pessoa = obtemPessoa(form);
    incluirPessoas(pessoa);
});

//FUNÇÃO 
function incluirPessoas(pessoas){
    var pessoaTr = montaTr(pessoa);
    var tabela = document.querySelector("#tabela-pessoas");
    tabela.appendChild(pessoaTr);
}