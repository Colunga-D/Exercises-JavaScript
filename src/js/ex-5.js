//ejercicio 5

// se usa para que los valores ingresados por el usuario se convierten a números usando parseFloat
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));


let mensaje;

if (isNaN(numero1) || isNaN(numero2)) {
  mensaje = "Por favor, ingresa números válidos.";
} else {
  if (numero1 > numero2) {
    mensaje = `El mayor es ${numero1}.`;
  } else if (numero2 > numero1) {
    mensaje = `El mayor es ${numero2}.`;
  } else {
    mensaje = "Los números son iguales.";
  }
}


console.log(mensaje);