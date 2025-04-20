function num(valor) {
    document.getElementById("Tela").innerHTML += valor;
}

function LimparTela13() {
    document.getElementById("Tela").innerHTML = "";
}

function calcular() {
    try {
        let expressao = document.getElementById("Tela").innerHTML;
        document.getElementById("Tela").innerHTML = eval(expressao);
    } catch {
        document.getElementById("Tela").innerHTML = "Erro";
    }
}