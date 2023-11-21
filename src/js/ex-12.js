// Ejercicio 12
const numero = parseInt(prompt("Ingresa un número:"));


let divisoresEncontrados = "";


if (numero % 2 === 0) {
  divisoresEncontrados += "2, ";
}
if (numero % 3 === 0) {
  divisoresEncontrados += "3, ";
}
if (numero % 5 === 0) {
  divisoresEncontrados += "5, ";
}
if (numero % 7 === 0) {
  divisoresEncontrados += "7, ";
}


divisoresEncontrados = divisoresEncontrados.slice(0, -2);


let mensaje;

if (divisoresEncontrados !== "") {
  mensaje = `El número ${numero} es divisible por: ${divisoresEncontrados}.`;
} else {
  mensaje = `El número ${numero} no es divisible por 2, 3, 5 ni 7.`;
}

console.log(mensaje);