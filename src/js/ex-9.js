//ejercicio 9
const frase = prompt("Ingresa una frase:");


let contadorVocales = 0;


for (let i = 0; i < frase.length; i++) {
  
  const caracter = frase[i].toLowerCase();

  
  if ('aeiou'.includes(caracter)) {
    
    contadorVocales++;
  }
}

console.log(`La frase contiene ${contadorVocales} vocal${contadorVocales !== 1 ? 'es' : ''}.`);