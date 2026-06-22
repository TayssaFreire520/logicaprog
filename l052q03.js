//Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.
let cont = 1;
acum =0;
do {
   acum += cont;
   cont = cont +1; //É o mesmo que o cont++.
}
while (cont <= 5);
console.log (`${acum}`);