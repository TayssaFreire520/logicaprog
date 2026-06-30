//Crie uma classe chamada Carro com as seguintes propriedades: marca: string
//modelo: string
// ano: number

class Carro{
    marca;
    modelo;
    ano;

    constructor ( marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(){
        console.log ("--- Detalhes do carro ---");
        console.log (`Marca: ${this.marca}`);
        console.log (`Modelo: ${this.modelo}`);
        console.log (`Ano: ${this.ano}`);
        
    }

} //fim da classe

let carro1 = new Carro ("Fiat", "Argo", 2026);
let carro2 = new Carro ("Volkswagen","Polo", 2025);

carro1.exibirDetalhes();
carro2.exibirDetalhes();      