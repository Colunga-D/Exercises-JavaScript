// Ejercicio 15
const numero = parseInt(prompt("Ingresa un número:"));


let esPrimo = true;

if (numero <= 1) {
  esPrimo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

const mensaje = esPrimo
  ? `El número ${numero} es primo.`
  : `El número ${numero} no es primo.`;

console.log(mensaje);