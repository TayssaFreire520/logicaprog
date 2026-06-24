let num = [42, 7, 19, 3, 55, 28];
console.log ("Original:", num);

let crescente = [...num].sort ((a , b) => a - b);
console.log ("Crescente:", crescente);

let decrescente = [...num].sort ((a, b) => b - a);
console.log ("Decrescente:", decrescente);