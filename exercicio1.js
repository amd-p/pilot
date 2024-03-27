/*
Faça um programa para calcular o valor de uma viagem.
Considere as três variáveis:
  1 - Preço do combustível (gas);
  2 - Gasto médio de combustível do carro por KM (kmGastoPorLitro);
  3 - Distância da viagem em KM (distanciaEmKm).
Imprima no console o valor que será gasto de combustível para realizar a viagem.
*/
let gas = 6.50
let kmGastoPorLitro = 12
let distanciaEmKm = 1922


let gastoPorKm = gas / kmGastoPorLitro


gastoTotal = gastoPorKm * distanciaEmKm

console.log (gastoTotal);
