// Ejercicio 15
// Solicitar al usuario que ingrese un número
// Parsear el número ingresado a un entero
const numero = parseInt(prompt("Ingresa un número:"));

// Inicializar una variable para indicar si el número es primo
// Un número es considerado primo hasta que se encuentre un divisor diferente de 1 y de sí mismo
let esPrimo = true;

// Verificar si el número es menor o igual a 1, ya que los números primos son mayores que 1
// Si es menor o igual a 1, no es primo
if (numero <= 1) {
  esPrimo = false;
} else {
  // Iterar desde 2 hasta el número anterior al ingresado por el usuario
  for (let i = 2; i < numero; i++) {
    // Verificar si el número es divisible por algún número en el rango
    // Si es divisible, no es primo, y se rompe el bucle
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

// Construir un mensaje indicando si el número es primo o no
const mensaje = esPrimo
  ? `El número ${numero} es primo.`
  : `El número ${numero} no es primo.`;

// Mostrar el resultado en la consola o en la pantalla
// Imprimir el mensaje
console.log(mensaje);