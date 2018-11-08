//FUNÇÃO DO BOTÃO
var botaoAdicionar = document.querySelector("#incluir-pessoas");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDeafult();
    var form = document.querySelector("#form-incluir");
    var pessoa = obtemPessoaFormulario(form);
    incluirPessoas(pessoa);
    form.reset();
});

//FUNÇÃO QUE OBTEM DADOS
function obtemPessoaFormulario(form){
     var pessoa = {
         nome: form.nome.value,
         rg: form.rg.value,
         contato: form.contato.value,
         local: form.local.value
     }
     return pessoa;
}

function montaTr(pessoa){
    var pessoaTr=document.createElement("tr");
    pessoaTr.classList.add("pessoa");

    pessoaTr.appendChild(montaTd(pessoa.nome, "info-nome"));
    pessoaTr.appendChild(montaTd(pessoa.rg, "info-nome"));
    pessoaTr.appendChild(montaTd(pessoa.contato, "info-nome"));
    pessoaTr.appendChild(montaTd(pessoa.local, "info-nome"));
}

function montaTd(){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function incluirPessoas(pessoa){
    var pessoaTr = montaTr(pessoa);
    var tabela = document.querySelector("#tabela-pessoas");
    tabela.appendChild(pessoaTr);
}