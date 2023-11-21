//ejercicio 1

// Definición de Variables:

// Se define una constante llamada title con el valor "Hello Javascript".
// Se obtiene una referencia al elemento HTML con el id 'title' y se almacena en la constante titleSection.
// Función printTitle:

// Se define una función llamada printTitle.
// Dentro de la función:
// Se actualiza el contenido HTML del elemento con el id 'title' (almacenado en titleSection).
// El nuevo contenido es un encabezado <h1> que contiene el valor de la constante title.
// Llamada a la Función:

// Se llama a la función printTitle para ejecutar el código dentro de ella. Esto actualiza el contenido HTML del elemento con el id 'title' en la página.
// Mostrar en la Consola:

// Se utiliza console.log para imprimir en la consola el mensaje 'conected'.

const title = "Hello Javascript"
const titleSection = document.getElementById('title')

function printTitle() {
    titleSection.innerHTML =
    `<h1>${title}</h1>` 


}
printTitle()

console.log('conected')






