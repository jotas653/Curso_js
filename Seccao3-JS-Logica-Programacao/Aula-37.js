//Operadores de comparação

/*
Os operadores de comparação vão comparar dois valores entre si
> - maior que
>= - maior ou igual
< - menor que 
<= - menor ou igual
== - igualdade (checa somente valor) não e recomendado usar ele
=== - igualdade estrita (vai checar valor e tipo)
!= - diferente (checa somente valor)
!== - diferente estrito (checa valor e tipo)

Essas expressões sempre vão nos retornar um boolean
Não devemos utilizar o == porque se tivermos dois dados diferentes (string e number) ele vai fazer o type correction e vai usar os dois como iguais
Devemos utilizar o === para fazer comparação entre dados
*/

// const expression = 10 > 5;
// console.log(expression); Usando o >

// const expression = 10 >= 10;
// console.log(expression); Vai checar se vai ser maior ou igual ao numero

// const expression = 10 < 11;
// const expression = 10 <= 11;
// console.log(expression); Checando se e menor e se menor ou igual

// const num1 = 10;
// const num2 = 20;
// const comp = num1 < num2;
// console.log(comp); Usando em uma expressão

// const num1 = 10;
// const num2 = 10;
// const num2 = 11;
// const equality = num1 == num2;
// console.log(equality); Usando um exemplo que da true e outro false

// const num1 = 10; number
// const num2 = "10"; string
// const comp = num1 == num2;
// console.log(comp); Usando o ==

// const num1 = 10; //number
// const num2 = "10"; //string
// const comp = num1 === num2;
// console.log(comp); Usando o ===

// const num1 = 10; number
// const num2 = "10"; string
// const comp = num1 != num2;
// console.log(comp); Usando o !=

// const num1 = 10; number
// const num2 = "10"; string
// const comp = num1 !== num2;
// console.log(comp); Usando o !==
