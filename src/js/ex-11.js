// Ejercicio 11
const numero = parseInt(prompt("Ingresa un número:"));


let mensaje = `El número ${numero} no es divisible por 2, 3, 5 ni 7.`;

if (numero % 2 === 0) {
  mensaje = `El número ${numero} es divisible por 2.`;
} else if (numero % 3 === 0) {
  mensaje = `El número ${numero} es divisible por 3.`;
}


console.log(mensaje);