//Desenvolver um programa que leia um número n qualquer menor ou igual a 50 
// e apresente o valor obtido da multiplicação sucessiva de n por 3 
// enquanto o produto for menor que 250. (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...).

n = 1;
multi = 0;

while (multi <=250) {
    multi = n * 3
    console.log (`${n} x 3 = ${multi}`);
    n = multi
}
