let aluno = {
    nome: "Clara",
    idade: 17,
    matriculado: true
};
console.log (aluno.nome);
console.log (`Idade: ${aluno.idade}`);

if (aluno.matriculado) {
    console.log ("Situação: ativo");
} else {
    console.log ("Situação: inativo");
};

aluno.idade = 25;
console.log (aluno.idade);