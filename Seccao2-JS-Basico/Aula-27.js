//Objeto Math

/*
Em Js nos temos um objeto chamado Math
Para arredondarmos devemos utilizar o seguinte Math.floor(passar a variavel com o numero)
E quando quisermos arrendodar para cima utilizamos o Math.ceil(passar a variavel com o numero)
O Math.round vai arrendodar o numero para o mais proximo
Math.max ele vai pegar o maior numero de uma sequencia, enquanto o Math.min o menor numero dessa sequencia
O Math.random vai gerar para nos um numero aleatorio de 0 a 1
O Math.Pi nos mostra o valor de pi
O Math.pow vai fazer a exponenciação dos numeros para nos
Para pegarmos a raiz quadrada de um numero devemos passar o que queremos * 0.5
Em JS podemos dividir um numero por 0
*/

// let num1 = 9.54789
// let num2 = Math.floor(num1) Arredondando para baixo
// let num2 = Math.ceil(num1) Arredondando o numero para cima
// console.log(num2)

// let num1 = 9.54789
// let num2 =  Math.round(num1) //Arredondando para o mais proximo
// console.log(num2)

// let num1 = 9.49
// console.log(Math.max(1,2,3,4,-58,69,5800,115515615)) //Pega o maior numero
// console.log(Math.min(1,2,3,4,-58,69,5800,115515615)) //Pega o menor numero

// let num1 = 589615
// console.log(Math.random()) //Gerando um numero aleatorio
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5) //Quando queremos um numero aleatorio entre certo numero
// console.log(aleatorio)

// console.log(Math.PI) //Mostrando o valor de pi

// console.log(Math.pow(2,10)) Fazendo a exponenciação

// let num1 = 9
// console.log(num1 ** (1/2)) Uma maneira de pegar a raiz quadrada
// console.log(num1 ** 0.5) Outra maneira de pegar a raiz quadrada

// console.log(100 / 0) //Dividindo por 0