//Ejercicio 10
const frase = prompt("Ingresa una frase:");


let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;


for (let i = 0; i < frase.length; i++) {
  
  const caracter = frase[i].toLowerCase();

  
  switch (caracter) {
    case 'a':
      contadorA++;
      break;
    case 'e':
      contadorE++;
      break;
    case 'i':
      contadorI++;
      break;
    case 'o':
      contadorO++;
      break;
    case 'u':
      contadorU++;
      break;
  }
}


console.log(`La letra 'a' aparece ${contadorA} veces.`);
console.log(`La letra 'e' aparece ${contadorE} veces.`);
console.log(`La letra 'i' aparece ${contadorI} veces.`);
console.log(`La letra 'o' aparece ${contadorO} veces.`);
console.log(`La letra 'u' aparece ${contadorU} veces.`);