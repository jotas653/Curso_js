const numero = Number(prompt('Digite um numero: '))

const numeroTitulo = document.getElementById('numero-titulo');
const quadrada = document.getElementById('quadrada');
const inteiro = document.getElementById('inteiro') 
const naoNumero = document.getElementById('naoNumero')
const arredondarCima = document.getElementById('arredondarCima')
const arredondarBaixo = document.getElementById('arredondarBaixo')
const duasCasas = document.getElementById('duasCasas')

numeroTitulo.innerHTML = numero
quadrada.innerHTML = `<p>Raiz Quadrada: ${numero ** (1/2)}</p>`
inteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
naoNumero.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`
arredondarCima.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
arredondarBaixo.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
duasCasas.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`