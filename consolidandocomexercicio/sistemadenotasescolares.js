/* ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema número para sistema de notas em carateres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - E


*/

let notas = 
let notaA = notas >= 90
let notaB = notas >= 80
let notaC = notas >= 70
let notaD = notas >= 60 
let notaE = notas <= 60


if (notaA) {
    console.log("A")
} else if (notaB ) {
    console.log("B")
} else if (notaC) {
    console.log('C')
} else if (notaD) {
    console.log('D')
} else if (notaE) {
    console.log('E')
}