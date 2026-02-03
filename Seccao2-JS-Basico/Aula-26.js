//Mais sobre numbers em JavaScript

/*
Tanto numeros sem pontos ou com pontos são numbers em Js
Para podermos convertemos um numero em uma string devemos colocar o toString
Quando quisermos saber a representação binaria de um numero devemos colocar o 2 dentro de toString
O toFixed nos serve para podermos arrendodar um numero grande e passamos dentro dele a quantidade de casas que queremos
Para sabermos se um numero ele e inteiro devemos fazer o seguinte Number.isInteger(passar variavel que queremos saber)
Saber se um numero e NaN devemos fazer o seguinte Number.isNaN(e passar a variavel), mas so vamos quando for uma string
As contas do Js segue um padrão do IEEE 754-2008
*/


// let num1 = 58 Ambos são numbers em JavaScript
// let num2 = 5.8 
// console.log(num1.toString() + num2) Convertendo para uma string, e aqui vai ser ferito a concatenação e não a soma

// let num1 = 1500
// let num2 = 2.5
// console.log(num1.toString(2)) Para termos a representação binaria daquele numero 

// let num1 = 15.89475632
// let num2 = 2.5
// console.log(num1.toFixed(2)) Para podermos arrendodar um numero, e dentro passamos a quantidade de casa que queremos

// let num1 = 10
// let num2 = 2.5
// console.log(Number.isInteger(num1)) //Saber se um numero ele e inteiro

// let num1 = 10.25
// let num2 = 2.5
// let temp = num1 * '5'
// console.log(Number.isNaN(temp)) Saber se e um NaN

// let num1 = 0.7
// let num2 = 0.1
// num1 += num2 //0.8
// num1 += num2 //0.9
// num1 += num2 //1.0

// num1 = parseFloat(num1.toFixed(2)) Conta a se fazer para quando queremos um numero exto
// console.log(num1)
// console.log(Number.isInteger(num1))

// let num1 = 0.7
// let num2 = 0.1

// num1 = ((num1 * 100) + (num2 * 100)) / 100 //0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100 //0.9 Outra maneira de ter o mesmo resultado da conta acima
// num1 = ((num1 * 100) + (num2 * 100)) / 100 //1.0

// console.log(num1)
// console.log(Number.isInteger(num1))
