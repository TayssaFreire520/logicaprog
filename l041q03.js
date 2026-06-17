//Desenvolver um programa que pergunte um número, e apresente como resposta 
//se o referido número é par ou é ímpar.

let num, resto;

console.log ("Informe o numero: ");
num = 11;
console.log (`Valor inserido: ${num}`);

resto = num % 2

if (resto === 0) {

 console.log (`${num} é par!`)
} else {
    console.log (`${num} é imapar!`);
}