// Ejercicio 14

const numero1 = parseInt(prompt("Ingresa el primer número:"));
const numero2 = parseInt(prompt("Ingresa el segundo número:"));


let divisoresComunes = "";


const menorNumero = Math.min(numero1, numero2);


for (let i = 1; i <= menorNumero; i++) {
  if (numero1 % i === 0 && numero2 % i === 0) {
    divisoresComunes += i + ", ";
  }
}

divisoresComunes = divisoresComunes.slice(0, -2);


let mensaje;

if (divisoresComunes !== "") {
  mensaje = `Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes}.`;
} else {
  mensaje = `No hay divisores comunes entre ${numero1} y ${numero2}.`;
}


console.log(mensaje);