// Declarando um objeto chamado aluno EM TYPESCRIPIT
let aluno: {nome: string; idade: number; ativo: boolean} = {
    nome: "João",
    idade: 20,
    ativo: true

};

console.log (aluno); //Exibir o objeto completo

console.log (aluno.nome);
console.log (`Idade: ${aluno.idade}`);
if (aluno.ativo) {
    console.log ("Situação: ativo");
} else {
    console.log ("Situação: inativo");
}
