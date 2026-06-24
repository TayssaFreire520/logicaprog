// Declarando um objeto chamado aluno
let aluno = {
    nome: "João",
    idade: 20,
    ativo: true

};

console.log (aluno); //Exibir o objeto completo

console.log (aluno.nome);
console.log (`Idade: ${aluno.idade}`);
if (aluno.ativo === true) {
    console.log ("Situação: ativo");
} else {
    console.log ("Situação: inativo");
}
