/*const numero = 11;

const numeroPar = numero % 2 === 0;

console.log(numeroPar);*/

/*const numero = 3;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('Executei')
}*/

/*const numero = 3;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('Par')
};

if (!numeroPar) {
    console.log('Impar')
};*/

/*const numero = 15;

const numeroDivisivelPor5 = (numero % 5) === 0;


if (numeroDivisivelPor5) {
    console.log('Sim')
} else
    console.log('Não');*/

    /*const numero = 15;

    const numeroDivisivelPor5 = (numero % 5) === 0;
    
    if (numero === 0) {
        console.log('número é inválido')
    } else if (numeroDivisivelPor5) {
        console.log('Sim');
    } else
        console.log('Não');*/

        /*const numero = 5;
        const isNumeroPar = (numero % 2) === 0;

        if (isNumeroPar) {
            console.log('número é par');
        } else
            console.log('O número é impar');*/

    /* Faça um programa para calcular o valor de uma viagem.

você terá 5 variáveis. sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
2 - gasto médio do combustível do carro por KM;
3 - distância em km da viagem; */

/*let precoGasolina = 5.798;
let precoEtanol = 2.521;
const etanol = 1;
const gasolina = 1;
let tipoDeCombustivel = etanol;
let consumoMedioGasolina = 10;
let consumoMedioEtanol = 8;
let distanciaPercorrida = 50;

if (tipoDeCombustivel === gasolina) {
    let valorViagem = distanciaPercorrida * precoGasolina / consumoMedioGasolina;
    console.log (valorViagem.toFixed(2));
} else (tipoDeCombustivel === etanol) 
    let valorViagem = distanciaPercorrida * precoEtanol / consumoMedioEtanol;
    console.log (valorViagem.toFixed(2));*/
    let precoGasolina = 5.798
    let precoEtanol = 2.521;
let tipoDeCombustivel = 'gasolina';
let consumoMedioGasolina = 10;
let consumoMedioEtanol = 8;
let distanciaPercorrida = 50;

if (tipoDeCombustivel === 'gasolina') {
    let valorViagem = distanciaPercorrida * precoGasolina / consumoMedioGasolina;
    console.log (valorViagem.toFixed(2));
} else {
    let valorViagem = distanciaPercorrida * precoEtanol / consumoMedioEtanol;
    console.log (valorViagem.toFixed(2))};
    /* o const e o let não deixa vazar o escopo da variável, por isso precisa de console.log dentro do if e else*/




