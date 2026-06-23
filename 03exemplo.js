// let matriz [[1,2],[3,4]];
// matriz com 2 linhas e 2 colunas.
let matriz = [
    [1, 2],
    [3, 4]
];

//matriz com 5 linhas e 4 colunas.
let letras = [
    ["A", "B", "C", "D"],
    ["E", "F","G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"],
    ["Q", "R", "S" ,"T"]
];
console.log (matriz);
console.log (letras);

//exebição dos valores da matriz letras usando for
for ( let linha = 0; linha < 5; linha ++) {
for (let col = 0; col < 4; col ++) {
    console.log (letras[linha][col]);
        }
}