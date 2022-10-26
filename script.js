// CALCULO DE IMC IMC = Peso ÷ (Altura × Altura)

let inputAltura = document.getElementById("altura");
let inputPeso = document.getElementById("peso");

function calcular(){

    let valorAltura = inputAltura.value;
    let valorPedo = inputPeso.value;
    
    let imc = valorPedo/(valorAltura * valorAltura);
    let classificacao = "";

    resultado.innerHTML = imc.toFixed(1);

    classificacao = classificaIMC();

    classificacao_result.innerHTML = " Classificação: " + classificacao;

    console.log(classificacao);
    

    function classificaIMC(){
        
        console.log(imc)

        if(imc <= 18.5){
            return "Magreza"
        } else if(imc <= 24.9){
            return "Normal"
        } else if(imc <= 29.9){
            return "Sobrepeso"
        } else if(imc <= 39.9){
                return "Obesidade"
        } else{
            return "Obesidade Grave"
        }
    }

}




