
// Primeira Tarefa

function exercicio1() {
    let valor1 = 10;
    let valor2 = "10";
    let comparacoesDeValores = valor1 === valor2;
    console.log(comparacoesDeValores);
}
exercicio1();

// Segunda Tarefa

function exercicio2() {
    let usuario1Altura = 1.8;
    let usuario2Altura = 1.75;
    let comparacaoDeAlturas = usuario1Altura > usuario2Altura;
    console.log(comparacaoDeAlturas);
}
exercicio2();

// Terceira Tarefa

function exercicio3() {
    let valorOne = 10;
    let valorTwo = "10";
    let comparacaoDeValores = valorOne !== valorTwo;
    console.log(comparacaoDeValores);
}
exercicio3();

// Quarta Tarefa

function exercicio4() {
    let usuarioAutenticado = true;
    if (usuarioAutenticado) {
        console.log("Seja bem-vindo!");
    }
}
exercicio4();

// Quinta Tarefa

function exercicio5() {
    let usuario = "Ana"
    let autenticado = false;
    if (autenticado !== usuario) {
        console.log(`Olá ${usuario} você está autenticado`);
    }
}
exercicio5();

// Sexta Tarefa 

function exercicio6() {
    let produto = "maçã";
    let quantidadeDeProduto = 2;
    let quantidadeFaltando = 5 - quantidadeDeProduto;
    if (produto && quantidadeDeProduto > 5 || produto && quantidadeDeProduto == 5) {
        console.log(`Você recebeu uma promoção, o valor do produto será R$5,00`);
    } else {
        console.log(`Se você adicionar mais ${quantidadeFaltando}, o valor sairá por R$5,00`);
    }
}
exercicio6();

alert(`Page made by: Lucas Maclean.`);
alert(`Página de aprendizado e execução de Comparações e Condições.`);
alert(`Tudo dentro do "Console"`);
