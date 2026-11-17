// Bloco 1: elementos da página
const casas = document.querySelectorAll(".casa");
const mensagem = document.getElementById("mensagem");
const placarX = document.getElementById("placar-x");
const placarO = document.getElementById("placar-o");

// Bloco 2: estado do jogo
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorAtual = "X";
let jogoAcabou = false;
let placar = { X: 0, O: 0 };

// combinações vencedoras: 3 linhas, 3 colunas, 2 diagonais
const combinacoes = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// devolve "X" ou "O" se alguém venceu, ou null se ninguém venceu
function verificarVencedor() {
    for (const [a, b, c] of combinacoes) {
        if (tabuleiro[a] !== "" && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            return tabuleiro[a];
        }
    }
    return null;
}

// atualiza os números do placar na tela
function atualizarPlacar() {
    placarX.textContent = placar.X;
    placarO.textContent = placar.O;
}

// Bloco 3: clique em cada casa
casas.forEach(casa => {
    casa.addEventListener("click", () => {
        const i = casa.dataset.index;

        // jogo acabou ou casa ocupada: não faz nada
        if (jogoAcabou || tabuleiro[i] !== "") {
            return;
        }

        // marca a jogada no array e na tela
        tabuleiro[i] = jogadorAtual;
        casa.textContent = jogadorAtual;

        // verifica vitória
        const vencedor = verificarVencedor();
        if (vencedor) {
            mensagem.textContent = "Jogador " + vencedor + " venceu!";
            placar[vencedor]++;
            atualizarPlacar();
            jogoAcabou = true;
            return;
        }

        // verifica empate: nenhuma casa vazia
        if (!tabuleiro.includes("")) {
            mensagem.textContent = "Deu velha! Empate.";
            jogoAcabou = true;
            return;
        }

        // troca o jogador
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        mensagem.textContent = "Vez do jogador " + jogadorAtual;
    });
});

// Bloco 4: reiniciar a partida
const botaoReiniciar = document.getElementById("reiniciar");

function reiniciar() {
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogadorAtual = "X";
    jogoAcabou = false;
    casas.forEach(casa => casa.textContent = "");
    mensagem.textContent = "Vez do jogador X";
}

botaoReiniciar.addEventListener("click", reiniciar);
