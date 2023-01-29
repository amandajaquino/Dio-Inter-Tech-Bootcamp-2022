/*const aluno = {'João'};*/

/*chamar todos

const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos);*/

/* chamar o primeiro elemento da lista 
const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos[0]);*/

/* adicionar 
const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan');

alunos[3] = 'Vinicius';

console.log(alunos);*/

/* adicionando string e números const alunos = [];

alunos.push('teste');

alunos.push(10);

alunos[2] = 'Vinicius';

console.log(alunos);

*/
/* removendo o último
const alunos = ['1', '2', '3'];

console.log(alunos);

console.log(alunos.pop());

console.log(alunos);*/

/* removendo o primeiro 
const alunos = ['1', '2', '3'];

console.log(alunos);

console.log(alunos.shift());

console.log(alunos)*/

/* para saber o tamanho da lista 

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);

*/
/* calculando média
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);*/
/* estrutura de repetição

for (let i = 0; i < 10; i++) {
    console.log(i);
}*/
/*
exemplo de estrutura de repetição
const nome = 'Vitor Johansen Guerra';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);

}*/

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;
console.log(media);