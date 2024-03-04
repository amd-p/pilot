/*
Exercício:
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Códigos Condição de pagamento:
1 - Á vista Débito, recebe 10% de desconto;
2 - Á vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/
const precoEtiqueta = 250.00
const tipoDePag = 4

if (tipoDePag === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.10))
}
else if (tipoDePag === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
}
else if (tipoDePag === 3){
    console.log(precoEtiqueta)
}
else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.10))
}