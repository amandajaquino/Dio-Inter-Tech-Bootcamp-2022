/* 
1) Faça um algoritimo que dado as 3 notas tirados por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

média = (nota 1 + nota 2 + nota 3)/3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;


let nota1 = 5;
let nota2 = 9;
let nota3 = 3;
let media = ((nota1 + nota2 + nota3)/3);

if (media < 5) 
{   
    console.log (media);
    console.log('Reprovado'); 
}
else if ((media >= 5) && (media <= 7 )) {
    console.log (media);
    console.log('Recuperação');
}
else {
    console.log (media);
    console.log ('Aprovado');
}*/

/*
2)
O IMC - Indice de Massa Corporal é um critério da Organização Mundial deSaúde para dau uma indicação sobre a condição de peso de uma pessoa adulta.

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
}*/
/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetue o cálculo adequado.

Código Condição de pagamento:
- Á vista Débito, recebe 10% de desconto;
- Á vista no dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta em juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let preco = 100;
let debito = (preco - (preco * 10 / 100));
let dinPix = (preco - (preco * 15 / 100));
let ate2x = preco;
let mais2x = (preco + (preco * 10 / 100));
let condicao = dinPix;

if (condicao == debito) 
{   
    console.log (debito);
}
else if (condicao == dinPix) {
    console.log (dinPix);
}
else if (condicao == ate2x) {
    console.log (ate2x);
}
else {
    console.log (mais2x)
}

