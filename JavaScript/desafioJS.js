//Desafio: Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.
{/* function getMultiples(integer, limit) {
        let multiples = [];

        
        for(let i = integer; i<= limit; i= i+integer){
          multiples.push(i);
        }
        return multiples;
        
        }

    //console.log (getMultiples(5,20));
    

        function sumArray(array) {
            let ourArray = getMultiples(3,18);

            let sum = 0;
          
            for (let i = 0; i < ourArray.length; i += 1) {
              sum += ourArray[i];
            }
            
            return sum;
            
          }

        console.log(sumArray(getMultiples(3,18))) */}

{/* resposta dio correta opção 1
let a = 3;
let N = 18;
 
let soma = 0
for(let i = a; i<=N;i+=a){
    soma+= i
}

console.log(soma) */}


{/*
segunda opção dio The reduce() method returns a single value: the function's accumulated result.
function getMultiples(integer, limite) {
    let multiples = []

    for (let index = integer; index <= limite; index += integer) {
        multiples.push(index)
    }
    return multiples
}



function sumMultiples(array) {
    return array.reduce((a, b) => a + b)
}

const A = parseInt(gets())
const N = parseInt(gets())
console.log(sumMultiples(getMultiples(A,N)))*/}

{/*let resultado = 15; // dio coloca no lugar do número parseInt(gets())


{/*function FizzBuzz(resultado) {
  if (resultado % 3 === 0 && resultado % 5 === 0) {
    return('FizzBuzz')
  } else if (resultado % 5 === 0) {
    return('Buzz')
  } else if (resultado % 3 === 0) {
    return('Fizz')
  } else {
    return(resultado)
  }
}

console.log(FizzBuzz(resultado));*/}

{/*let n = 10;

function somatório (n) {
  if (n > 0) {
    return (n + somatório(n-1))
  } else {
    return 0
  }
}

console.log (somatório(n))*/}

let A = 1;
let B = 2;


{/*
let A = parseInt(gets());
let B = parseInt(gets());

function igualdade(A,B) {
  if (A === B ) {
    return ('Sao iguais!')
  } else {
    return ('Nao sao iguais!')
  }
}

console.log (igualdade(A,B));

como deu certo na dio

let A = gets();
let B = gets();
const saoIguais = (A,B) => A === B;
const equal = (A,B) => saoIguais(A,B) ?  "Sao iguais!" : "Nao sao iguais!"
console.log(equal(A, B)) ;
assim tbm passa
let A = gets();
let B = gets();

print(A === B ? "Sao iguais!": "Nao sao iguais!")

*/}



