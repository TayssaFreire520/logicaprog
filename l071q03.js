let produtos = [
    {nome: "Notebook", preco: 2800.00},
    {nome: "Mouse", preco: 75.00},
    {nome: "Mouse", preco: 75.00}
];
console.log (`Primeiro produto: ${produtos[0].nome}`);
console.log (`Ultimo produto: ${produtos[2].nome}`);

for (let produto of produtos) {
    console.log (`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
}
