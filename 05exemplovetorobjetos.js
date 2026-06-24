//Material 07 - página 16

//declarando um vetor de objetos "Aluno"
let alunos = [
    {nome: "Ana", idade:18, ativo: true },
    {nome: "Carlos", idade:22, ativo: false},
    {nome: "Maria", idade:20, ativo: true}
];

console.log (alunos);

//Acessando pelo índice + propriedade
console.log (alunos[0].nome);

//NÃO FUNCIONA DESTA FORMA
console.log (`Todos os dados do primeiro aluno (a): ${ alunos [0] } \n`);

//percorrendo o vetor de objetos com for clássico. Quebra de linha \n (se chama contrabarra N)
for (let cont =0; cont < alunos.length; cont++ ) {
console.log (`Nome: ${alunos[cont].nome}`);
console.log (`Idade: ${alunos[cont].idade}`);
console.log (`Ativo: ${alunos[cont].ativo} \n`);
};

//percorrendo o vetor de objetos com for of
for (let aluno of alunos) {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Ativo: ${aluno.ativo} \n`);
};
