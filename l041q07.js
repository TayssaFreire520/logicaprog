//Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, 
//e exiba como resposta o módulo deste valor, ou seja, o número lido como sendo positivo.

let num, positivo, negativo;
console.log ("Informe o valor inteiro:");
num = 7;
console.log (`Número informado ${num}`);

if (num > 5) {
    console.log (`${num} é positivo`);
} else if (num < 7) {
    console.log (`${num} é negativo`);
} else { 
    console.log (`${num} é nulo`);
}