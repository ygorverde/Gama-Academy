// Classes provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

class Matematica {
    soma(a, b){
        return a + b;
    }

    subtracao(a, b){
        return a-b;
    }
}

let instanciaMatematica = new Matematica()

var result = instanciaMatematica.soma(10, 10)

console.log('Resultado: ', result)