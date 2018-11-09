document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;


var pacientes = document.querySelectorAll(".paciente");

    for (var i =0; i < pacientes.length; i++){
        var paciente = pacientes[i];

        var tdPeso = document.querySelector(".info-peso");
        var tdAltura = document.querySelector(".info-altura");
        var tdImc = document.querySelector(".info-imc");

        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        var pesoValido = true;
        var alturaValida = true;

            if (peso <= 0 || peso > 1000){
                console.log("PESO INVÁLIDO!");
                tdImc.textContent = "PESO INVALIDO!";
                pesoValido = false;
            }
            
            if (altura <= 0 || altura > 1000){
                console.log("ALTURA INVÁLIDA!");
                tdImc.textContent ="PESO INVÁLIDO!";
                alturaValida = false;
            }

            if(pesoValido && alturaValida){
                var imc = peso / (altura * altura);
                tdImc.textContent = imc.toFixed(2);
            }

    }