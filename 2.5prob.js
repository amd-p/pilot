/*
Exercício:
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condição de pagamento:
- Á vista Débito, recebe 10% de desconto;
- Á vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/
const precoEtiqueta = 250.00
const tipoDePag = 'PIX'
let precoTotal, valorDesconto, precoJuros

if (tipoDePag === 'Débito'){
    valorDesconto = precoEtiqueta * 0.10
    precoTotal = precoEtiqueta - valorDesconto
    console.log(precoTotal)
}
else if (tipoDePag === 'PIX' && 'Dinheiro'){
    valorDesconto = precoEtiqueta * 0.15
    precoTotal = precoEtiqueta - valorDesconto
    console.log(precoTotal)
}
else if (tipoDePag === 'Parcelado em 2x'){
    console.log(precoEtiqueta)
}
else{
    precoJuros = precoEtiqueta * 0.10
    precoTotal = precoEtiqueta + precoJuros
    console.log(precoTotal)
}