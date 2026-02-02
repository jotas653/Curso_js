/*
O valor undefined nos diz que ele não aponta em nenhum local na
memoria
E a função alert não nos retorna nada
A função confirm nos retorna alguma coisa
Tudo que e retornado pela função prompt vai ser uma string
E podemos converter para numero fazendo o seguinte abaixo:
parseInt(), parseFloat(), Number()
*/

// alert('Hello World') //Faz um alerta 
// confirm('Deseja realmente apagar') 
// prompt('Digite o seu nome: ') //Para o usuario digitar alguma coisa
// const confirmar = confirm('Deseja que queres mesmo apagar ?')
// let num1 = prompt('Digite um numero: ')


//AULA 22 - EXERCICIO SOBRE NAVEGADOR NA TELA
let num1 = prompt('Digite um numero: ')
let num2 = prompt('Digite um  outro numero: ')
const resultado = parseFloat(num1) + parseFloat(num2)
alert(`O resultado foi de: ${resultado}`)