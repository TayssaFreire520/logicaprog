//material 08 (modularização e funções) - página 06

let num; //variável global, ela está viva para todo o codigo

function somar(a, b) {
    //resultado => é uma variável local
    let resultado = a + b;
    return resultado;
}

//exibindo imediatamente o valor retornado pela função
console.log( somar (5, 3));

//guardando o valor retornado em uma variável
num = somar(10, 20);
console.log(num);

somar(4, 5); //retorno da função se perde

//função sem return (função void)
function direcionador() {
    console.log("Siga em frente! Estude sempre!");
}

//chamando a função direcionador ()
direcionador();
let texto = direcionador();
console.log(texto); //variável não recbe retorno da função

//chamando a função mensagem
mensagem(); //perdi o retorno da função
console.log(mensagem());

function mensagem() {
    return "Ame mais, brigue menos!";
}

function tudao() {
    console.log("Início da função tudao()");
    direcionador(); //chamando função direcionador
    let calc = somar(2, 3);
    console.log(`resultado da soma: ${calc}`);
    let msg = mensagem();
    direcionador();
    console.log (`Mensagem do dia: ${msg}`);
    console.log ("Fim da função tudao()");
}

tudao(); //chamando a função tudao()

let cont; //global
for(cont = 0; cont <= 3; cont++) {
    console.log (cont);
}
console.log (cont); //deu bom, pq é global