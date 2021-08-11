let achou = false;

var numeroSorteado = 15;
let possivelValor = 0;

while (!achou){
    possivelValor += 1;
    if(numeroSorteado === possivelValor){
        achou = true
    }else {
        console.log('Possível valor não corresponde ao número sorteado' + possivelValor)
    }
}