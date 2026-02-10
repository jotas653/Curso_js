//Arrays(Básico)

/*
Um array e uma lista de coisas que queremos acessar, e para criarmos
um array devemos colocar em colchetes o queremos separando por virgula
Mas devemos lembrar que devemos passar apenas apenas um tipo de dado
dentro dos arrays
Assim como as string os arrays eles tambem são indexados, mas eles 
são indexados por elemento
Para acessar um elemento somente do array passamos da seguinte forma: variavel[passo o indice que eu quero]
E acessar todos os elementos fazemos da seguinte forma: somente passamos a variavel
Para mudar o valor de um array devemos fazer o seguinte: varivel[indice que quer mudar] = novo valor que deseja
E acrescentando um novo valor fazemos o seguinte: variavel[novo indice] = passar o valor desse novo indice
E para sabermos o tamanho do nosso array fazemos assim: variavel.length
E uma outra maneira de adicionarmos um valor ao final do nosso array e dessa maneira: variavel.push(novo valor)
Quando queremos adicionar um valor no começo do array fazemos dessa seguinte maniera: unshift(valor que queremos)
Com a função pop removemos um valor do final do array fazemos o seguinte: variavel.pop(). E podemos armanezar esse
valor que estamos removendo em uma variavel
E com o comando shift() removemos o valor que esta no começo: variavel.shift()
Quando excluimos um item do array alteramos tambem a sua indexação, para que isso não aconteça devemos usar o delete
fazendo dessa maneira somente removemos o valor e não o indice
E com o js nos podemos acessar um array que não existe
Para fatiarmos um array devemos fazer a mesma coisa que colocamos com a string: variavel.slice(de onde queremos ate onde), mas devemos lembrar de sempre colocar um numero a mais
Para verificarmos se algo esta na instancia de um array devemos fazer o seguinte: console.log(variavel instanceOf(Array))
*/

// const nome = 'João Pedro Moura' Pegar um indice de uma string
// console.log(nome[3])

//                 0       1        2
// const alunos = ['Luiz', 'Maria', 'João',]
// console.log(alunos) //Acessando todos os indices
// console.log(alunos[0]) //Acessando um indice por vez
// console.log(alunos[2])

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// alunos[0] = 'Eduardo' Mudando o valor do indice
// alunos[3] = 'Roberta' Acrescetando um novo valor a esse indice
// console.log(alunos)
// console.log(alunos.length) Sabendo o tamanho do array

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// alunos[alunos.length] ='Luiza'
// alunos[alunos.length] ='Claudio' //Acrescentando o valor de uma nova maneira
// alunos[alunos.length] ='Barbara'
// console.log(alunos)

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// alunos.push('Otávio Miranda', 'Luixa') //Outra forma de adicionarmos um valor
// console.log(alunos)

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// alunos.unshift('Luiza')
// alunos.unshift('Fabio')
// console.log(alunos)

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// alunos.pop() Removendo um valor do array mas do final
// const removido = alunos.pop() Salvando o valor que foi removido em uma variavel
// console.log(alunos)
// console.log(removido)
// alunos.shift() //Rmovendo do começo
// console.log(alunos)
// const removerDoInicio = alunos.shift()
// console.log(removerDoInicio)
// console.log(alunos)

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// delete alunos[0] //Excluindo o valor e não o seu indice
// console.log(alunos)
// console.log(alunos[0])

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// alunos.push('Andrea')
// alunos.push('Eduardo')
// console.log(alunos.slice(0,2)) //Fatiando um array
// console.log(alunos.slice(0,-1)) //Fatiando um array

//                0         1       2
// const alunos = ['Luiz', 'Maria', 'João']
// console.log(typeof(alunos))
// console.log(alunos instanceof(Array)) //Verificando se uma instancia de array

//                0         1       2
// let alunos = ['Luiz', 'Maria', 'João']
// alunos = 123 //Mudando todo o valor do array
// console.log(alunos)
// console.log(alunos instanceof(Array))
