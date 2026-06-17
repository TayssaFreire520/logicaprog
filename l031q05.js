//Fazer um programa que pergunte o salário de um funcionário e apresente
// este salário com um aumento de 15%.

//declarção de variáveis

let salario, acrescimo, salFinal;

console.log ("Informe o seu salário: ");
salario =3550.00;

acrescimo = salario *15 /100 ;
salFinal = salario + acrescimo;

console.log (`Seu novo salário é R$: ${salFinal.toFixed(2)}`);
