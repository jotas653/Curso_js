//Funções em JavaScript

/*
Funções executam ações. E um trecho de codigo que vai executar uma ação.
O que queremos com as funções e mandar um valor para ela e conseguir obter o valor de volta, mas existem funções que não nos retornam nada
Para criarmos uma função usamos a palavra function e damos um nome para ela segue o exemplo: function hello() {}
E dentro do parenteses nos podemos passar um input de dados
E para podermos chamarmos uma função devemos fazer o seguinte: passar o nome da função e colocar o parenteses()
Sem o parenteses mostra que a função ela não esta sendo iniciada
E dentro dos parenteses nos podemos passar quantas linhas de codigo queremos
Para retornamos algo para uma função devemos passar algo para ela
O que passamos dentro dos () são chamados de parametros e dentro das funções podemos passar diversos parametros
E para passarmos um valor para o parametro e fazer com que ele seja chamado fazemos o seguinte abaixo:
Devemos passar o nome dentro () e o valor do que queremos dentro de onde chamamos saudacao('Luiz')
E as funções são reutilizaveis ou seja podemos chamar ela em qualquer parte do codigo
Em JS todas as funções vão retornar undefined se não especificamos o que queremos passar
Para fazermos com que um função retorne um valor devemos passar o return e o que queremos retornar
Entretanto não podemos passar um valor diferente do que queremos retornar para uma função
Nos podemos fazer com que uma função mostre o que esta sendo exibida ou não e existem funções que não retornam valor
E tudo que esta dentro de uma função esta protegido e nos não conseguimos alterar
Assim que o interpretador encontrar a palavra return ele não vai entender mais nada para baixo daquela função
Quando não passamos nada para uma função receber ou se passamos somente um parametro vai nos retornar um problema
Se não passarmos um valor para o parametro da variavel mas colocamos um, ele pre assumir que vai ser aquele valor
Podemos declarar uma função dentro de uma variavel, e essa função leva o nome de função anonima
E podemos declarar uma variavel no formato de arrow function tambem
*/

// function bomDia() {
// }
// bomDia() Exemplo de criando uma função e chamando essa função

// function saudacao() {
//   console.log("Hello World");
// }
// saudacao(); Chamando uma função e ela retornando algo

// function saudacao(nome) {
//   console.log(`Bom dia seu ${nome}`);
// }
// saudacao("Luiz");
// saudacao("Maria");
// saudacao("Pedro"); Passando um parametro para essa função e fazendo com que ele seja exibido

// function saudacao(nome) {
//   console.log(`Bom dia seu ${nome}`);
//   return 1234;
// }
// const variavel = saudacao("Luiz"); Fazendo uma função retornar algo e mostrando que estamos salvando um valor na variavel
// console.log(variavel);

// function saudacao(nome) {
//   return `Bom dia seu ${nome}`;
// }    MELHOR MANEIRA DE FAZER COM QUE UMA FUNÇÃO EXIBA ALGO
// const variavel = saudacao("Adenor");
// console.log(variavel);

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// }    UMA MANEIRA DE SE FAZER UMA FUNÇÃO
// console.log(soma(2, 2));
// console.log(soma(9, 5));
// console.log(soma(9, 9));

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// }  EXEMPLO QUE NÃO PODEMOS MODIFICAR OU MUDAR O QUE ESTA DENTRO DA FUNÇÃO
// console.log(soma(2, 2));
// console.log(resultado);

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
//   console.log("Abacate");
// } MOSTRANDO QUE O JS NÃO LE NADA DEPOIS DO RETURN
// console.log(soma(25, 25));

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// } Se passarmos nenhum ou somente um valor vamos ter um problema de NaN
// console.log(soma());
// console.log(soma(2));

// function soma(x, y) {
//   const resultado = x + y;
//   return resultado;
// } Mostrando que tambem concatena string
// console.log(soma("João", "Pedro"));

// function soma(x = 1, y = 1) {
//   const resultado = x + y;
//   return resultado;
// }    QUANDO NÃO PASSAMOS NENHUM VALOR TEMOS QUE PREASSUMIR ESSE
// const resultado = soma();
// console.log(resultado);

// const raiz = function (n) {
//   return n ** 0.5;
// }; Outra maneira de se declarar uma variavel
// console.log(raiz(9));

// const raiz = (n) => {
//   return n ** 0.5;
// }; Mais uma maneira de se declarar uma variavel
// console.log(raiz(25));
// const raiz = n => n ** 0.5; TAMEBM PODEMOS FAZER DESSA MANEIRA
