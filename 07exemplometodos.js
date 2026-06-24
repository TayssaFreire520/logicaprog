class Pessoa {
    nome;
    idade;

  //Método construtor (ajuda a criar objetos)
constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

//Método comum
apresentar() {
    console.log (`Olá! meu nome é ${this.nome}!`);
}

} // Fim da classe Pessoa

// istanciando o objeto usando o construtor
let pessoa1 = new Pessoa("Roberto", 33);

console.log (pessoa1);

//Chamando o método apresentar da classe pessoa
pessoa1.apresentar();