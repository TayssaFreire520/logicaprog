
//Desenvolver um programa que pergunte um número. Se este número for maior que 20,
// Então ele deverá exibir metade do numero, senão, ele deverá exibir o número
// sem alterações.

let num, metade;
console.log ("Informe um número:");
num = 20; //exemplo de um número informado pelo usuário

if (num > 20) {
 metade = num /2;
 console.log (`A metade de ${num} é ${metade}`);
} else {
    console.log (`O número inserido foi ${num}`);
}

console.log ("FIM DO PROGRAMA"); 
