//criar uma função calcularArea(base, altura) que retorne a área de um retângulo

function calcularArea(base: number, altura: number):number {
    let area = base * altura;
    return area;
}

let a: number = calcularArea(2, 3);
console.log(`A área do retângulo é ${a}`);

let n1= 5, n2 = 8;
let n3= calcularArea(n1, n2);
console.log(`A área do retângulo é ${n3}`);

//criar uma função converterCelsius(temp) que coverta Celsius para Fahrenhit: (temp *9/5) +32
function converterCelsius (temp: number):number {
    return (temp * 9/5) + 32;
}
console.log(`40 graus celsius = ${converterCelsius (40)}`);

//Criar uma função saudacaoPersonalizada(nome) que retorne "Olá, [nome]! Seja bem-vindo."
function saudacaoPersonalizada (nome: string): string { //é uma variável local
    return `Olá, ${nome}! Seja bem-vindo.`
}
console.log(saudacaoPersonalizada("Carlos"));
let nome: string  = "Ana"; //variável global
console.log (saudacaoPersonalizada (nome));