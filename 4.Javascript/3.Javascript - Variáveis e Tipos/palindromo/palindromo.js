//solução 1
function verificaPalindromo(string) {
    if (!string) return;

    console.log (string === string.split('').reverse().join(''));
}

verificaPalindromo("ovo");