/*class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa ('Vitor', 25);
const renan = new Pessoa ('Renan', 30);

compararPessoas(vitor, renan);*/

/* adicionar valores a objetos

const vitor = {
    nome: 'Vitor J Guerra',
    idade: 25
};

vitor.altura = 1.69;

console.log(vitor);*/

/* deletar valores a objetos

const vitor = {
    nome: 'Vitor J Guerra',
    idade: 25
};

vitor.altura = 1.69;
delete vitor.nome;

console.log(vitor);*/

/* Função dentro do Objeto (estrutura dinâmica de chave (nome) e valor ('Vitor')) é chamado método 
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

/Aqui pode mudar os valores das chaves quando usa um método/

pessoa.nome = 'Amanda'
pessoa.idade = 36;

pessoa.descrever();*/

/* Função dentro do Objeto (estrutura dinâmica de chave (nome) e valor ('Vitor')) é chamado método 
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

/Aqui pode mudar a função quando usa um método/

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();*/

/*const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

 console.log(pessoa[`nome`]);

 através de uma string estar acessando dinamicamente o atributo, alternativa para pessoa.nome por exemplo
 */

 /*const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

 pessoa[`nome`] = 'teste';

 pode subistituir o nome do atributo sem saber o nome do atributo
 */

 /*classe a função é definir como são pessoas para que ela possa ser instanciada
 
 quando declarar uma função na classe não precisa de function

 Instância é a ocorrência;
 
 Pessoa(classe/definição) é como a pessoa deve ser
 instância é a ocorrência de uma pessoa(objeto)

 class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
 }

 const vitor = new Pessoa();
 vitor.nome = 'Vitor J Guerra';
 vitor.idade = 25;

 const renan = new Pessoa();
 renan.nome = 'Renan J Paula';
 renan.idade = 30;

 console.log(vitor);
 console.log(renan);
*/

/*class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
 }

 const vitor = new Pessoa();
 vitor.nome = 'Vitor J Guerra';
 vitor.idade = 25;

 const renan = new Pessoa();
 renan.nome = 'Renan J Paula';
 renan.idade = 30;

 vitor.descrever(); */

/*constructor é o que acontece quando uma pessoa é instanciada

class Pessoa {
    nome;
    idade;

    constructor() {
        this.nome ='teste';
        this.idade = 20;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
 }

 const vitor = new Pessoa();

 vitor.descrever(); 


 saída pois não instanciei nada para vitor: Meu nome é teste e minha idade é 20 */

 /* pode passar parâmetros dentro do constructor, o que obriga a sempre que uma
 pessoa for instanciada que ela tenha parâmetros
 o construtor pode preparar novos atritubos que não estariam no código, 
 que são deduções
 

 class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} portanto o meu ano de nascimento é ${this.anoDeNascimento}`)
    }
 }

 const vitor = new Pessoa('Vitor', 25);
 const renan = new Pessoa('Renan', 25);

 vitor.descrever(); 
 renan.descrever();

 Isso é um pouco de orientação a objetos criando definições/contratos/formalizações(classes) de como tem que ser o objeto,
 e as instância/ocorrência seguindo esse contrato e criando novas ocorrências desses objetos
*/

/*class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} portanto o meu ano de nascimento é ${this.anoDeNascimento}`)
    }
 }

 function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(o) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(o) que ${p1.nome}`); 
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
 }

 const vitor = new Pessoa('Vitor', 25);
 const renan = new Pessoa('Renan', 25);

 compararPessoas(vitor, renan);*/
