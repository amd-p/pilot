/* Cálculo de IMC utilizando conceito de funções.
*/
function calcularIMC(peso, altura){
    return peso / Math.pow (altura, 2)
}

function classificarIMC(imc){
    if (imc < 18.50){
        return ('Abaixo do peso')
    }   
    else if (imc >= 18.50 && imc < 25.00){
        return ('Peso normal')
    }    
    else if (imc >= 25.00 && imc < 30.00){
        return('Acima do peso')
    }
    else if (imc >= 30.00 && imc < 40.00){
        return('Obeso')
    }
    else{
        return ('Obesidade grave')
    }
}

function main(){
const peso = 88.300
const altura = 1.85
const imc = calcularIMC(peso, altura)
console.log(classificarIMC(imc))
}

main()