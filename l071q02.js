//Desenvolver um programa que pergunte cinco elementos de um vetor a. 
// No final, apresente a soma de todos os elementos deste vetor.

let num1 = 9;
let num2 = 7;
let num3 = 4;
let num4 = 2;
let num5 = 5;

let lista = [num1, num2, num3, num4, num5];
let acum = 0;

for (let cont = 0; cont <= 4; cont++) {
 acum = acum + lista[cont]
};
console.log (`Soma: ${acum}`)