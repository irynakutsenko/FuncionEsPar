let num = parseInt(prompt("Añade un numero."));

function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
    return undefined;
}
if (esPar(num)) {
    console.log("Es par.");
} else {
    console.log("No es par.")
}