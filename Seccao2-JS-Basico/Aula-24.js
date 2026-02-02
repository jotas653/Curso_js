// Mais sobre strings

/*
As strings elas são indexadas, cada caracter tem um indice
E para pegarmos um indice devemos fazer o seguinte: console.log(string[numero do indice que queremos])
E quando pegamos um range fora do indice nos retornar um valor undefined
Podemos tambem utilizar a função charAt(), para tambem pegarmos um indice
Temos a função concat para quando quisermos concatenar uma string -> concat()
O indexOf nos mostra o indice que a palavra começa
O lastIndexOf ela vai encontrar a palavra a partir do final, ele so vai achar o valor que estiver antes
O match e para poder achar as letras minusculas da frase
O search nos mostra o indice de onde começa as letras minusculas
O replace nos serve para podermos substituir uma palavra pela outra
Para podermos ver o tamanho de uma string devemos usar o length
O slice nos mostra de onde a palavra começa e onde ela termina atraves do indice e para podermos ver a palavra inteira temos que sempre passar um indice acima
O split nos serve para podermos dividir uma string
Para colocarmos uma string toda em maiusculo devemos utilizar o toUpperCase
E para colocarmos uma string tudo em minuscula devemos fazer o seguinte toLowerCase
*/


// let justString = 'Um texto';
// let justString = 'Um "texto"'; MANEIRAS DE ESCREVER UMA STRING
// let justString = "Um texto";
// let justString = "Um 'texto'";

// let justString = "Um \"texto\"";  Para poder escapar um caracter

// let justString = "Um \\texto";  Colocando uma barra invertida

                // 01234567
//  let justString = "Um texto"; Indices da string
// console.log(justString[9]) Como pegar um indice de uma string

                // 01234567
//  let justString = "Um texto"; //Indices da string
// console.log(justString.charAt(5)) //Como pegar um indice de uma string

// let justString = "Um texto"; //Indices da string
// console.log(justString.concat(' em', ' um',' lindo dia')) Como pegar um indice de uma string
// console.log(justString + ' em um lindo dia') Maneiras de concatenar uma string
// console.log(`${justString} em um lindo dia`) 

// let justString = "Um texto";
// console.log(justString.indexOf('texto')) Para ver em qual indice a palavra começa
// console.log(justString.indexOf('o', 3)) Para achar uma palavra depois do indice em que ela foi passada
// console.log(justString.indexOf('m', 3)) Não vai achar a palavra pq não tem antes do indice

// let justString = "Um texto";
// console.log(justString.lastIndexOf('o'))  Achando a palavra o a partir do final
// console.log(justString.lastIndexOf('m', 3))
// console.log(justString.lastIndexOf('o', 3)) Não vai achar pq não tem nenhum valor depois antes do indice 3

// let justString = "Um texto";
// console.log(justString.match(/[a-z]/g)) Achar as letras minusculas da frasde

// let justString = "Um texto";
// console.log(justString.search(/[a-z]/)) Indicando o indice que as letras minusculas começam

// let justString = "Um texto";
// console.log(justString.replace('Um','Outra')) Substituindo a palavrum por outra
// console.log(justString.replace(/Um/, 'OUTRA')) Outra maneira de fazer replace
// let justString = "O rato roeu a roupa do rei de roma";
// console.log(justString.replace(/r/g, '#'))

// let justString = "O rato roeu a roupa do rei de roma.";
// console.log(justString.length) Para podermos ver o tamanho de uma string

// let justString = "O rato roeu a roupa do rei de roma";
// console.log(justString.slice(2,6))

// let justString = "O rato roeu a roupa do rei de roma";
// console.log(justString.split(' '))
// console.log(justString.split('r'))
// console.log(justString.split(' ', 2)) Podemos escolher a quantidade de vezes que queremos dividir

// let justString = "O rato roeu a roupa do rei de roma";
// console.log(justString.toUpperCase()) Tudo em maisuclo

// let justString = "O rato roeu a roupa do rei de roma";
// console.log(justString.toUpperCase()) Tudo em minusculo