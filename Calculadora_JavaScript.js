var teclado = require("prompt-sync")();
console.log("***CALCULADORA***");
let Numero1 = teclado("Digite o operador:");
let Numero2 = teclado("Digite o denominador:");
let Operacao = teclado("Digite a operação:");

switch (Operacao) {
    case "+":
        Soma(Numero1, Numero2);
        break;
    case "-":
        Subtracao(Numero1, Numero2);
        break;
    case "*":
        Multiplicacao(Numero1, Numero2);
        break;
    case "/":
        Divisao(Numero1, Numero2);
        break;
    default:
        console.log("operação inválida");
}
function Soma(Num1, Num2) {
    console.log(parseFloat(Num1) + parseFloat(Num2));
}
function Subtracao(Num1, Num2) {
    console.log(parseFloat(Num1) - parseFloat(Num2));
}
function Multiplicacao(Num1, Num2) {
    console.log(parseFloat(Num1) * parseFloat(Num2));
}
function Divisao(Num1, Num2) {
    console.log(parseFloat(Num1) / parseFloat(Num2));
}