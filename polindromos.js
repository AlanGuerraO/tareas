function esPalindromo(frase) {
    frase = frase.replace(/\s/g, "").toLowerCase();
    for (let i = 0; i < frase.length / 2; i++) {
        if (frase[i] !== frase[frase.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function primeraLetra(frase) {
    frase = frase.replace(/\s/g, "").toLowerCase();
    return frase[0];
}

function letraMitad(frase) {
    frase = frase.replace(/\s/g, "").toLowerCase();
    const mitad = Math.floor(frase.length / 2);
    return frase[mitad];
}
const frase = prompt("Ingrese una frase:");
if (esPalindromo(frase)) {
    console.log("La frase es un palíndromo.");
} else {
    console.log("La frase no es un palíndromo.");
}

alert("Primera letra: " + primeraLetra(frase));
alert("Letra ubicada en la mitad: " + letraMitad(frase));