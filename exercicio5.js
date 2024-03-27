/* Faça um programa para calcular o valor de uma viagem.
Considere as três variáveis:
  1 - Preço do etanol (precoEta);
  2 - Preço da gasolina (precoGas);
  3 - O tipo de combustível que está no seu carro (tipoDeCombustível);
  4 - Gasto médio de combustível por KM (gastoEmLitros);
  5 - Distância da viagem em KM (distanciaKm).
Imprima no console o valor que será gasto para realizar a viagem.
*/
const precoGas = 5.98;
const precoEta = 4.10;
const gastoEmLitros = 10;
const distanciaKm = 1200;
const tipoDeCombustível = 'Etanol';
let total;


if (tipoDeCombustível === 'Etanol'){
 const gastoPorKm = precoEta / gastoEmLitros
 let total = gastoPorKm * distanciaKm
 console.log(total)

}else {   
 const gastoPorKm = precoGas / gastoEmLitros
 let total = gastoPorKm * distanciaKm
 console.log(total)
}
