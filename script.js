const casas = document.querySelectorAll(".casa");
const mensagem = document.getElementById("mensagem");

let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorAtual = "X";

casas.forEach(casa => {
    casa.addEventListener("click", () => {
        const i = casa.dataset.index;


        if (tabuleiro[i] !== "") {
            return;
        }

        tabuleiro[i] = jogadorAtual;
        casa.textContent = jogadorAtual;

        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        mensagem.textContent = "Vez do jogador " + jogadorAtual;
    });
});
