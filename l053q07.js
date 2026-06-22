// Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 3 até 21.
let num = 21;
let acum = 0;

for ( let cont = 3;cont <= num; cont++ ) {
    acum = acum + cont;
}
console.log (`A soma é ${acum}`);