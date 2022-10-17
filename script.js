// CALCULO DE IMC IMC = Peso ÷ (Altura × Altura)

let inputAltura = document.getElementById("altura");
let inputPeso = document.getElementById("peso");

function calcular(){

    let valorAltura = inputAltura.value;
    let valorPedo = inputPeso.value;
    
    let imc = valorPedo/(valorAltura * valorAltura);

    resultado.innerHTML = imc.toFixed(1);
}

console.log(imc)