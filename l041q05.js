//Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
// aluno foi aprovado se a média escolar for maior ou igual a 5. 
//Se o aluno não foi aprovado, indicar uma mensagem informando essa condição. Apresentar junto com 
// a mensagem de aprovação ou reprovação o valor da média obtida pelo aluno.

let num1, num2, num3, num4, num5;
let media;

console.log ("Informe primeira nota: ");
num1 = 4 ;
console.log (`Nota1: ${num1}`);

console.log ("Informe segunda nota: ");
num2 = 4 ;
console.log (`Nota2: ${num2}`);

console.log ("Informe terceira nota: ");
num3 = 4 ;
console.log (`Nota3: ${num3}`);

console.log ("Informe quarta nota: ");
num4 = 4 ;
console.log (`Nota4: ${num4}`);

console.log ("Informe quinta nota: ");
num5 = 4 ;
console.log (`Nota5: ${num5}`);


media = (num1 + num2 + num3 + num4 + num5) /4;

if (media >= 5) {

 console.log (`Média: ${media.toFixed (1)} - Situação: APROVADO (A)!`)
} else {
    console.log (`Média: ${media.toFixed (1)} - Situação: REPROVADO (A)!`);
}


//comentário inserido em 17/06/2026
