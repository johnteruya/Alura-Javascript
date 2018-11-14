//MANIPULANDO ELEMENTOS DO HTML PELO JS
var titulo = document.querySelector(".titulo");
titulo.textContent="Nome da Tabela";


//VERIFICADOR DE CAMPO NULO
function required(){
    var empt = document.forms["form"]["nome"].value;
        if (empt == ""){
            alert("Please input a Value");
            return false;
        } else {
            alert('Code has accepted : you can try another');
            return true; 
        }
}
