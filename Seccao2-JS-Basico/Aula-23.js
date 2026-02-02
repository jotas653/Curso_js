//Exercicio da aula 23

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const fixedValueA = varA
varA = varB
varB = varC
varC = fixedValueA



console.log(varA, varB, varC)