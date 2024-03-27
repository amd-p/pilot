/*
Exercício:
Elaborar um algoritmo que dado um peso e altura de um adulto mostre o resultado do IMC, de acordo com a tabela abaixo:
- Abaixo de 18.5: abaixo do peso
- Entre 18.5 e 25: peso normal
- Entre 25 e 30: acima do peso
- Entre 30 e 40: obeso
- Acima de 40: obesidade grave

IMC = peso / (altura*altura)
*/

const peso = 88.300
const altura = 1.85
const imc = peso / (altura*altura)
console.log (imc)

if (imc < 18.50){
    console.log('Abaixo do peso')
}   
else if (imc >= 18.50 && imc < 25.00){
    console.log ('Peso normal')
}    
else if (imc >= 25.00 && imc < 30.00){
    console.log('Acima do peso')
}
else if (imc >= 30.00 && imc < 40.00){
    console.log('Obeso')
}
else{
    console.log('Obesidade grave')
}
