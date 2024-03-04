/*
Exercício:
Criar um algoritmo que dado 3 notas de um aluno, calcule e imprima sua média e a sua classificação conforme tabela abaixo:

Classificação
- Média menor que 5, reprovação.
- Média entre 5 e 7, recuperação.
- Média acima de 7, passou de semestre.
*/
const nota1 = 8.30;
const nota2 = 7.80;
const nota3 = 9.00;
const media = (nota1 + nota2 + nota3) / 3
console.log(media)

if (media < 5){
    console.log('Reprovado')
}   
    else if (media >= 5 && media <= 7){
    console.log('Recuperação')
}   
    else{
    console.log('Aprovado')
}