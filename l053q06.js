//Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada 
// a um expoente qualquer, ou seja, de be, onde os valores de b e e são fornecidos pelo usuário, 
// sem utilizar Math.pow().

let base;
let exp;
let acum = 1; // Para multiplicar sempre vai começar ultilizando o número 1, pois ele é um elemento neutro.

console.log ("Informe o valor da base da potência: ");
base = 2;
console.log ("Informe o valor do expoente da potência: ");
exp = 4;
console.log (`Valores inseridos: Base: ${base}, Expoente: ${exp}`);

for (let cont = 1; cont <= exp ; cont ++) {
    acum = acum * base;
}

console.log (`${base} elevado a ${exp} = ${acum}`);