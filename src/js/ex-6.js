//ejercicio 6
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
const numero3 = parseFloat(prompt("Ingresa el tercer número:"));


let mensaje;

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
  mensaje = "Por favor, ingresa números válidos.";
} else {
  if (numero1 > numero2 && numero1 > numero3) {
    mensaje = `El mayor es ${numero1}.`;
  } else if (numero2 > numero1 && numero2 > numero3) {
    mensaje = `El mayor es ${numero2}.`;
  } else if (numero3 > numero1 && numero3 > numero2) {
    mensaje = `El mayor es ${numero3}.`;
  } else {
    mensaje = "Al menos dos números son iguales o todos son iguales.";
  }
}


console.log(mensaje);
