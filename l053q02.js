// Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, 
// onde n é um valor informado pelo usuário.

let num = 7;
let acum = 0;

console.log ("informe um número");
num =7;
console.log (`Número inserido ${num}`);

for ( let cont = 0; cont <= num; cont++ ) {
    acum = acum + cont;
}
console.log (`A soma é ${acum}`);