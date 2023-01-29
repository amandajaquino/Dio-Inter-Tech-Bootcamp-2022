//solução aula
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

let myVar = null;

console.log(verificaPalindromo(myVar));