// Desenvolver um programa que pergunte o sexo da pessoa 
// e dê como resposta a seguinte orientação de acordo com o sexo informado: 
// “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.

console.log ("Iforme seu sexo: ");
console.log ("Informe o código referente ao banheiro desejado: ");
console.log ("2 - MASCULINO");
console.log ("3 - FEMININO");
cod = 3
console.log (`Código inserido: ${cod}`);

    switch ( cod ) {
case 2:
console.log ("Você selecionou: 2 - MASCULINO a esquerda");
 break;

 case 3:
console.log ("Você selecionou: 3 - FEMININO a direita");
 break;
    }
