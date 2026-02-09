//Objetos(Básico)

/* 
Não podemos alterar o valor da variavel usando const, mas sim o valor do objeto
Entretanto usando let nos podemos mudar o valor dessa variavel
Quando precisamos criar um objeto utilizamos a chaves
Para podermos criar um objeto devemos fazer conforme esta no exemplo
Quando estamos criando uma função passamos parametros para ela, e esses valores que passamos para os parametros são chamados de argumentos
Podemos criar um objeto atraves de uma função e ela leva o nome de factory
Quando uma função esta dentro de um objeto ela e chamada de metodo
*/

// let array = [1, 2, 3];
// const array = [1, 2, 3];
// array.push(4);
// array[0] = "Joaquim"; Moastrando que com let podemos mudar o valor e que const não
// array = "djfjab";
// console.log(array);

// const pessoa1 = {
//   nome: "João Pedro",
//   sobrenome: "Moura Barboza",
//   idade: 24,
// }; Criando e acessando os valores de um objeto
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function createPerson(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
//   return {
//     nome,
//     sobrenome,
//     idade,
//   }; Podemos tbm fazer dessa maneira
// } Criando um objeto a partir de uma função
// const pessoa1 = createPerson("João", "Pedro", 24);
// console.log(pessoa1);

// const pessoa1 = {
//   nome: "João",
//   sobrenome: "Barboza",
//   idade: 24,
//   fala() {
//     console.log("Hello world")
//     console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
//   },
// }; Utilizando uma função dentro de um objeto
// pessoa1.fala();

// const pessoa1 = {
//   nome: "João",
//   sobrenome: "Barboza",
//   idade: 27,
//   fala() {
//     console.log(`A minha idade e de ${this.idade}`);
//   }, Usando mais uma função para poder representar isso
//   incrementar() {
//     ++this.idade;
//   },
// };
// pessoa1.fala();
