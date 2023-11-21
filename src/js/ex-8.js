//ejercicio 8


const phrase = prompt("Ingresa una frase:");

let vocalesEncontradas = "";


for (let i = 0; i < `phrase`.length; i++) {
  
  const caracter = phrase[i].toLowerCase();

  
  if ('aeiou'.includes(caracter)) {
    vocalesEncontradas += caracter;
  }
}

console.log(`Las vocales que aparecen en la frase son: ${vocalesEncontradas}`);