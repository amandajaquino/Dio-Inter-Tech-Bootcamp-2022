//solução 2 - teste de entrevista de emprego
// se não entender faça o teste de mesa, no caderno
// escrevendo um exemplo como abaixo
// abba
// 0123 length

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";
    let i = 0;
    
    for (let i = 0; i < string.length / 2; i++);
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }

    return true;
}

console.log(verificaPalindromo2("abba"));