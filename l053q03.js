// Desenvolver um programa que apresente os resultados de uma tabuada de 
// um número qualquer informado pelo usuário.

let num = 5; // Valor dado pelo usuário.
let rest;
console.log (`Informe um número: ${num}`);

for (let cont = 1; cont <=10; cont++) {
    rest = num * cont;
    console.log (`${num} x ${cont} = ${rest}`);
}