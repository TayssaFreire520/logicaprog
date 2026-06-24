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

//Exemplo notação de conchetes
let propriedade = "nome";

console.log (aluno[propriedade]); //João

//também funciona
console.log(aluno["idade"]); //20

// Declarando um novo objeto
let produto = {
    nome: "Notebook",
    preco: 3000
};
console.log (produto);

//Modificando o preço do produto
produto.preco =2800
console.log (produto);

// Adicionar uma nova propriedade (nova chave)
produto.estoque = 15;
console.log (produto);
