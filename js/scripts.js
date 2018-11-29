//MANIPULANDO ELEMENTOS DO HTML PELO JS
var titulo = document.querySelector(".titulo");
titulo.textContent="Planejamento Financeiro";

//INSERINDO ELEMENTOS NA TABELA
var botaoAdicionar = document.querySelector("#adicionar-gastos");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#formulario");

    var gastos = form.gastos.value;
    var valor = form.valor.value;

    var gastosTr = document.createElement("tr");
    var valorTr = document.createElement("tr");

    var gastosTd = document.createElement("td");
    var valorTd = document.createElement("td");

    gastosTd.textContent = gastos;
    valorTd.textContent = valor;
    
    gastosTr.appendChild(gastosTd);
    valorTr.appendChild(valorTd);
    
    var tabela = document.querySelector("#tabela");

    tabela.appendChild(gastosTr);
    tabela.appendChild(valorTr);
    
    form.reset();
});

//BOTAO TESTE
var botao = document.querySelector("#botao");
botao.addEventListener("click", function(){
    event.preventDefault();

    var add = document.querySelector("#add");
    var addSpan = document.createElement("span");
    addSpan.textContent = add;
    add.appendChild();
});