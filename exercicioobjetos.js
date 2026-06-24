let aluno = {
    nome: "Clara",
    idade: 17,
    matriculado: true
};
console.log (aluno.nome);
console.log (`Idade: ${aluno.idade}`);

if (aluno.matriculado) {
    console.log ("Situação: matriculado");
} else {
    console.log ("Situação: não está matriculado");
};

//modificar a idade
aluno.idade = 25;
console.log (aluno);