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
const alunos = ['Luiz', 'Maria', 'João']