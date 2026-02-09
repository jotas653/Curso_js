//Valores primitivos e valores por referencia

/*
Quando falamos do tipo de dado estamos falando do valor em si
Primitivos são tipos de dados imutaveis, ou seja, não podemos mudar o seu valor - string, number, boolean, undefined e null (bigint, symbol)
Quando estamos usando os dados primitivos para a mesma coisa, estamos falando de copia
Se estivermos usando o valor de uma varaivel para colcoar em outra varaivel e esse dado for do tipo primitivo estamos fazendo uma copia

Referência (são os tipos de dados que conseguimos mudar) mútavel - Array, object, function
E no caso de tipo de dados de referencia nos não estamos copiando igual fazemos com os dados primitivos, apenas estamos apontando para o mesmo lugar na memoria 

Os tipos de dados primitivos quando utilizar a 
*/

// let nome = "Luiz";
// nome = "Otavio"; Não estamos mudando o valor, apenas trocando o dado
// console.log(nome);

// let nome = "João";
// nome[0] = "B"; Mostrando que a string e um tipo imutavel
// console.log(nome[0]);

// let a = "A";
// let b = a; Estamos copiando
// console.log(a, b)
// a = "Outra coisa";
// console.log(a, b);

// let a = [1, 2, 3];
// let b = a;
// console.log(a, b);
// a.push(4);  Esses valores estão apontando para o memso local na memoria
// console.log(b);
// b.pop(4);
// console.log(b);
