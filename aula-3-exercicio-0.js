/* Exemplo real de uma análise das autoescolas mais baratas na minha região utilizando funções.
*/
function valorTotal(aVista, taxas){
    return aVista + taxas
}

function autoSalvadorCorreia(){
    const aVista = 1100
    const taxas = 769.14
    const valorA = valorTotal (aVista, taxas)
}

function autoBarbosa(){
    const aVista = 1200
    const taxas = 500
    const valorB = valorTotal (aVista, taxas)
}

function autoGarcia(){
    const aVista = 1700
    const taxas = 460
    const valorC = valorTotal (aVista, taxas)
}

function main(){
    if (autoSalvadorCorreia < autoBarbosa && autoSalvadorCorreia < autoGarcia){
        console.log("Salvador Correia é a opção mais barata!")
    }
    else if (autoBarbosa < autoSalvadorCorreia && autoBarbosa < autoGarcia){
        console.log("Barbosa é a opção mais barata!")
    }
    else{
        console.log("Garcia é a opção mais barata!")
    }
}

main()
