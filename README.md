# 🎮 Jogo da Velha

Jogo da velha para dois jogadores feito com HTML, CSS e JavaScript puro, desenvolvido como Projeto Integrador Final do curso **Fundamentos de Git e GitHub** do CEFET-MG.

🔗 **Jogue online:** https://deboracamargo-comp.github.io/jogo-da-velha/

## Funcionalidades
- Tabuleiro 3×3 com alternância de turnos entre X e O
- Bloqueio de jogadas em casas já ocupadas
- Detecção de vitória (linhas, colunas e diagonais) e de empate
- Placar de vitórias de cada jogador
- Botão para iniciar uma nova partida sem zerar o placar

## Como jogar
1. Acesse o link acima (ou abra o `index.html` no navegador).
2. O jogador X começa: clique em uma casa vazia para jogar.
3. Vence quem completar primeiro uma linha, coluna ou diagonal.
4. Clique em **Nova partida** para jogar de novo.

## Tecnologias
- HTML5
- CSS3 (Grid e Flexbox)
- JavaScript (sem bibliotecas)
- GitHub Pages para publicação

## Estrutura do projeto
```
jogo-da-velha/
├── index.html   # estrutura da página
├── style.css    # estilos e tema visual
├── script.js    # lógica do jogo
├── README.md
└── reflexao.md
```

## Como rodar localmente
```bash
git clone https://github.com/deboracamargo-comp/jogo-da-velha.git
cd jogo-da-velha
```
Depois, abra o `index.html` no navegador.

## Fluxo de desenvolvimento
O projeto foi desenvolvido com issues, branches e pull requests:

| Issue | Branch | Pull Request |
|---|---|---|
| #1 Tabuleiro e jogadas | `feat/tabuleiro` | #4 |
| #2 Verificar vitória e empate | `feat/vitoria` | #5 |
| #3 Reiniciar partida e placar | `feat/reiniciar` | #6 |
| — Melhorias visuais | `style/visual` | #7 |

Os commits seguem o padrão **Conventional Commits** (`feat:`, `style:`, `chore:`, `docs:`).

## Autora
Débora Cristina Barbosa Camargo — Engenharia de Computação, CEFET-MG (Campus Divinópolis)
GitHub: [deboracamargo-comp](https://github.com/deboracamargo-comp)
