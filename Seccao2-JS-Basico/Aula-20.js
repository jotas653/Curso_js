// OPERADORES ARITMETICOS

/* 
+ -> ADIÇÃO (ESTE OPERADOR FAZ A ADIÇÃO E A CONCATENAÇÃO)
- -> SUBTRAÇÃO
/ -> DIVISÃO
* -> MULTIPLICAÇÃO
** -> POTENCIAÇÃO
% -> RESTO DA DIVISÃO - SEMPRE QUE O RESTO DA DIVISÃO FOR INTEIRO
ELE VAI RETORNAR UM 0 E QUANDO NÃO FOR VAI RETORNAR 1
NO JAVASCRIPT TEMOS A PRECEDENCIA DE VALORES, OU SEJA, VAO TER OPERADORES
QUE VÃO TER MAIS PESO DO QUE OUTROS
A ORDEM DE PRECEDENCIA NO JS E A SEGUINTE ABAIXO
() - Primeiro a ser executado
** - Segundo a ser executado
* - Terceiro a ser executado
/ E % - Quarto a ser executado
+ e - Quinto a ser executado
E QUANDO ELES TIVEREM O MESMO VALOR DE PROCEDENCIA VAI TUDO SER 
EXECUTADO DA ESQUERDA PARA DIREITA
PARA INCREMENTARMOS UM VALOR DEVEMOS UTILIZAR O SEGUINTE ++, E LOGO
NÃO PODEMOS UTILIZAR O CONST PARA DECLARMOS UMA VARIAVEL QUE VAI RECEBER
UM VALOR DE INCREMENTO, E ESSE VALOR PODE SER TANTO POS QUANTO PRE
NO CASO DO PRE ELE VAI FAZER A CONTA E DEPOIS RETORNAR O VALOR E NO POS ELE EXECUTA A AÇÃO E DEPOIS O INCREMENTO
NOS TEMOS O OPERADOR DE DECREMENTO QUE E O --, QUE VAI FAZER A MESMA COISA DO DE INCREMENTO
OPERADORES DE ATRIBUIÇÃO
SEMPRE QUE QUISERMOS FAZERMOS UMA CONTA ENTRE UM NUMERO E UMA STRING VAI REORNAR UM NaN
SEMPRE QUE A STRING FOR UM NUMERO CONSEGUIMOS FAZER A CONVERSÃO PARA NUM
UTILIZANDO O SEGUINTE: parseInt(string aqui dentro)
E QUANDO TIVERMOS UM NUMERO COM PONTO DEVEMOS FAZER O SEGUINTE: parseFlaot(string aqui dentro)
OU SO PODEMOS COLOCAR O NUMBER E QUE ELE VAI SE VIRAR
*/

// const num1 = 5
// const num2 = 10
// console.log(num1 + num2)

// const num1 = 5
// const num2 = 10
// console.log(num1 * num2)

// const num1 = 5
// const num2 = 10
// console.log(num1 / num2)

// const num1 = 5
// const num2 = 10
// console.log(num1 - num2)

// const num1 = 2
// const num2 = 10
// console.log(num1 ** num2)

// const num1 = 10
// const num2 = 5
// console.log(num1 % num2) RESTO VAI SER 0
// const num1 = 10
// const num2 = 3
// console.log(num1 % num2) RESTO VAI SER 1

// const num1 = 5
// const num2 = 2
// const num3 = 10
// console.log(num1 + num2 * num3) //O operador de * teve maior precedencia
// const num1 = 5
// const num2 = 2
// const num3 = 10
// console.log((num1 + num2) * num3) //Colocando os parenteses invertamos a ordem de precedencia

// const num1 = 5
// const num2 = 50
// const num3 = 30
// console.log(num1 * num2 / num3)

// let contador = 1
// contador ++;
// contador ++;
// contador ++;
// contador ++;
// console.log(contador)

// let contador = 1
// ++contador;
// ++contador ;
// ++contador;
// ++contador;
// console.log(contador)

// let decremento = 10
// console.log(decremento--)
// console.log(--decremento)

// const passo = 50
// let contador = 0
// contador = contador + passo
// console.log(contador)
// contador = contador + passo
// console.log(contador)
// contador = contador + passo
// console.log(contador)


// let contador = 0
// contador += 2
// contador += 2
// contador += 2
// console.log(contador) Podemos fazer isso para qualquer operador aritmetico

// let contador = 2
// contador **= 10
// console.log(contador)
// let contador = 2
// contador *= 10
// console.log(contador)

//NaN = Not a number e quando a conta da errada
// const num1 = 100
// const names = 'jOTAS'
// console.log(num1 * names)

// Conversão de string para numero - ParseInt
// const num1 = 100
// const num2 = parseInt('5')
// console.log(num1 + num2)
// console.log(typeof(num2))

// Conversão de string para numero - ParseFloat
// const num1 = 10
// const num2 = parseFloat('5.3')
// console.log(num1 + num2)
// console.log(typeof(num2))

// Conversão de string para numero - Number
const num1 = 10
const num2 = Number('5.3')
console.log(num1 + num2)