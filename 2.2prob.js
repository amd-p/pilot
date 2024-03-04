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