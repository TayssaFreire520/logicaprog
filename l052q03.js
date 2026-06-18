//Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.
let cont = 1;
acum =0;
do {
   acum += cont;
   cont = cont +1;
}
while (cont <= 5);
console.log (`${acum}`);