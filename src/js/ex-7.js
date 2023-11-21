//ejercicio 7


const frase = prompt("Ingresa una frase:");


let contadorA = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === 'a') {
    contadorA++;
  }
}

console.log(`La letra 'a' aparece ${contadorA} veces en la frase.`);