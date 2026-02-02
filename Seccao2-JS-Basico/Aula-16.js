//EXERCICIOS CONST E LET
const Name = 'João Pedro'
const surname = 'Moura Barboza'
let age = 24
let weight = 71
const heightInMeters = 1.75
let IMC = weight / (heightInMeters * heightInMeters)
const birdthDate = 2026 - (age + 1)

console.log(Name, surname, 'tem', age, 'anos, pesa', weight, 'kg')
console.log('tem', heightInMeters, 'de altura e seu IMC é de', IMC )
console.log(Name, 'nasceu em', birdthDate)

console.log(`${Name} ${surname} tem ${age} anos, pesa ${weight} kg tem 
    ${heightInMeters} de altura e seu IMC é de ${IMC}
    ${Name} nasceu em, ${birdthDate}`)