const title = "Hello Javascript"
const titleSection = document.getElementById('title')

function printTitle() {
    titleSection.innerHTML =
    `<h1>${title}</h1>` 


}
printTitle()

console.log('conected')