// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 20;

// String
const nome: string = 'Ygor';

// Array
const lista: number[] = [10, 20, 30, 40];
const idades2: Array<number> = [10, 20, 30];

// Tuple
let jogadores: [string, string, number];
jogadores = ['Ygor', 'Verde', 22];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Reprovado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoApi: any = [123, 'Ygor', true];
const retornodaApi2: any = {

}

// Void (Quando não retorna nada).
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined.
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //...
}
criar({
    propriedade: 1,
})
// criar('Ygor DÁ ERRO!')

// Never (Nunca continua).
function loopInfinito(): never {
    while (true) { }
}

function erro(msg: string) {
    throw new Error(msg);
}

function falha() {
    return erro('Algo falhou')
}

// * UNION TYPES * //
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é: ${nota}`);
}
exibirNota(10);
exibirNota('10');

//* ALIAS *//

type typeFuncionario = {
    nome: string;
    sobrenome: string;
    data: Date;
}

// type typeFuncionarios = Array<typeFuncionario>; 
// const funcionarios: typeFuncionario[] = [{
// const funcionarios: typeFuncionarios = [{

const funcionarios: Array<typeFuncionario> = [{
    nome: 'Ygor',
    sobrenome: 'Verde',
    data: new Date()
}, {
    nome: 'Katia',
    sobrenome: 'Verde',
    data: new Date()
}];

function tratarFuncionarios(funcionarios: typeFuncionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}

// * Valores Nulos ou Opcionais * //

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string | null;
}

const contato: Contato = {
    nome: 'Ygor',
    telefone1: '81',
    telefone2: null
}

//* Type Assertion (ajuda a definir o tipo na hora da utilização) explicidamente*// 
const minhaIdade: any = 22;
// <number>minhaIdade.toString();
(minhaIdade as number).toString();

// const input = document.getElementById('numero1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);