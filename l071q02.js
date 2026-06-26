//Desenvolver um programa que pergunte cinco elementos de um vetor a. 
// No final, apresente a soma de todos os elementos deste vetor.

let a = [9, 7, 4, 2, 5];
let acum = 0;

for (let cont = 0; cont <= 4; cont++) {
 acum = acum + a[cont]
};
console.log (`Soma: ${acum}`)