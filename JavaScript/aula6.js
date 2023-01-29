/*function escrevaNome(nome) {
    console.log('O nome é ' + nome);
}

escrevaNome('Amanda');
escrevaNome('Renan');

function verificarIdade(idade) {
    if (idade >=18) {
        console.log(escrevaNome('vitor')+ 'é Maior');
    } {
        console.log('Menor')
    }
}

verificarIdade(18);*/
/*function escrevaNome(nome) {
    return('O nome é ' + nome);
}

escrevaNome();

function verificarIdade(idade) {
    if (idade >=18) {
        return('. Ele é Maior de Idade');
    } {
        return('. Ele é Menor de Idade')
    }
}

verificarIdade();


console.log(escrevaNome('Vitor') + verificarIdade(15));*/
/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetue o cálculo adequado.

Código Condição de pagamento:
- Á vista Débito, recebe 10% de desconto;
- Á vista no dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta em juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/*let preco = 100;
let debito = (preco - (preco * 10 / 100));
let dinPix = (preco - (preco * 15 / 100));
let ate2x = preco;
let mais2x = (preco + (preco * 10 / 100));
let condicao = dinPix;

function veriticarPagamento(formaPagamento){
    if (formaPagamento == debito) 
    {   
        return (debito);
    }
    else if (formaPagamento == dinPix) {
        return (dinPix);
    }
    else if (formaPagamento == ate2x) {
        return (ate2x);
    }
    else {
        return (mais2x)
    }
}

veriticarPagamento();


console.log ('O preço é ' + veriticarPagamento('debito'));*/

/*function aplicarDesconto(valor, desconto) {
 return (valor - (valor * ( desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (precoEtiqueta + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 2;

function valorPagamento(formaDePagamento) {
if (formaDePagamento === 1) 
{   
    return (aplicarDesconto(precoEtiqueta, 10));
}
else if (formaDePagamento === 2) {
    return (aplicarDesconto(precoEtiqueta, 15));
}
else if (formaDePagamento === 3) {
    return (aplicarDesconto(precoEtiqueta));
}
else {
    return (aplicarJuros(precoEtiqueta, 10));
}
}

valorPagamento();

console.log('O valor para pagamento é de', valorPagamento(2));*/
/*function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));*/
function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;
}

incrementarJuros();

console.log(incrementarJuros(100,10))
