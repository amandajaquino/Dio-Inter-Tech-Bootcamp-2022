/*function () {

}

teste();
essa função não está retornando nada, então chamamos de procedimento

se usar o console só imprimirá o valor não poderá aproveitar
por isso deve usar o return

*/

/*function sayMyName(name) {
    console.log('Your name is:' + name);
}

sayMyName('Renan');
sayMyName('Vitor');*/

/*function quadrado(valor) {
   return (valor * valor);
}

const quadradodeDez = quadrado(10);
console.log(quadradodeDez);*/

/*function quadrado(valor) {
    return (valor * valor);
 }
 
 console.log(quadrado(10) + quadrado(10));*/

 /*function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return (valor + valorDeAcrecimo);
 }
 
 console.log(incrementarJuros(100, 10));
 console.log(incrementarJuros(100, 15));

 Uma função é um pequeno trecho de código con N parâmetros. 
 Esse trecho de código pode ser chamado quantas vezes quiser */

/*O IMC - Indice de Massa Corporal é um critério da Organização Mundial deSaúde para dau uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acodo com a tabela abaixo:

IMC em adultos Condição:
- Abaixo de 18,5 Abaixo do peso;
- Entre 18,5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

let peso = 130;
let altura = 1.98;
let IMC = ((peso/(altura * altura)));

if (IMC < 18.5) 
{   
    console.log (IMC);
    console.log('Abaixo do peso'); 
}
else if ((IMC >= 18.5) && (IMC < 25 )) {
    console.log (IMC);
    console.log('Peso normal');
}
else if ((IMC >= 25) && (IMC <= 30 )) {
    console.log (IMC);
    console.log('Acima do peso');
}
else {
    console.log (IMC);
    console.log ('Obesidade Grave');
}
refatorando
todo trecho que for de responsabilidade única deve isolar ele em forma de função

uma funcão é como se estivessemos fazendo uma nova variável
funções no javaScript é como se fosse valores portanto objeto
assim como manipula número e texto
*/
/*function calcularImc(peso, altura) {
    return (peso / (Math.pow (altura, 2)));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return('Abaixo do peso');
    }
    else if ((imc >= 18.5) && (imc < 25 )) {
        return('Peso normal');
    }
    else if ((imc >= 25) && (imc < 30 )) {
       return('Acima do peso');
    }
    else if ((imc >= 30) && (imc < 40 )) {
        return('Obeso');
    }
    else { 
        return('Obesidade Grave');
    }
}

function main() {
const peso = 75;
const altura = 1.75;
const imc = calcularImc(peso, altura);
console.log(imc);
console.log(classificarImc(imc));
}

main = function() {
    console.log(1);
}

main();

console.log(main); */

/* função imediatamente invocada não consigo chamar de fora pois não tem uma variável
para invocar a função, criado para isolar o código o scopo */

function calcularImc(peso, altura) {
    return (peso / (Math.pow (altura, 2)));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return('Abaixo do peso');
    }
    else if ((imc >= 18.5) && (imc < 25 )) {
        return('Peso normal');
    }
    else if ((imc >= 25) && (imc < 30 )) {
       return('Acima do peso');
    }
    else if ((imc >= 30) && (imc < 40 )) {
        return('Obeso');
    }
    else { 
        return('Obesidade Grave');
    }
}

(function () {
const peso = 75;
const altura = 1.75;
const imc = calcularImc(peso, altura);
console.log(imc);
console.log(classificarImc(imc));
})();
 