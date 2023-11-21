//Ejercicio 13
const numero = parseInt(prompt("Ingresa un número:"));


let divisoresEncontrados = "";


for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisoresEncontrados += i + ", ";
  }
}


divisoresEncontrados = divisoresEncontrados.slice(0, -2);


let mensaje;

if (divisoresEncontrados !== "") {
  mensaje = `Los divisores de ${numero} son: ${divisoresEncontrados}.`;
} else {
  mensaje = `El número ${numero} no tiene divisores mayores que 0.`;
}


console.log(mensaje);