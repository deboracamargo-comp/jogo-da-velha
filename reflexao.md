# Reflexão sobre o Projeto Integrador

## Sobre o projeto
Para o Projeto Integrador Final, desenvolvi um jogo da velha em HTML, CSS e JavaScript, publicado pelo GitHub Pages. Escolhi um jogo simples de propósito: assim pude concentrar o esforço no fluxo de trabalho com Git e GitHub, que era o foco do curso, sem me perder em uma lógica complexa.

## O que aprendi
- **Planejar antes de programar:** criar as issues primeiro me obrigou a dividir o jogo em partes menores (tabuleiro, vitória/empate, placar). Cada issue virou uma branch e um pull request, e o trabalho ficou bem mais organizado.
- **Branches e pull requests:** trabalhar em uma branch separada para cada funcionalidade deixou a `main` sempre estável. Usar `Closes #N` na descrição do PR mostrou como o GitHub conecta o código às tarefas, fechando a issue automaticamente no merge.
- **Conventional Commits:** usar prefixos como `feat:`, `style:`, `chore:` e `docs:` deixou o histórico fácil de ler. Olhando o `git log`, dá para entender a evolução do projeto sem abrir os arquivos.
- **GitHub Pages:** publicar o projeto foi simples, e entendi que o site reflete apenas o que está na `main`.

## Dificuldades
- **O site não atualizava:** em um momento achei que meu código não tinha funcionado, porque o link do Pages não mostrava o tabuleiro. Na verdade, as mudanças estavam só na minha branch local. Isso deixou claro na prática a diferença entre o repositório local, a branch e a `main` remota.
- **Ordem do script no HTML:** os cliques não funcionavam porque a tag `<script>` estava antes do tabuleiro no HTML, então o JavaScript rodava antes de as casas existirem. Usei o Console do navegador para investigar e descobri que a lista de casas estava vazia.
- **Arquivo não salvo:** em outro momento o navegador ainda carregava a versão antiga do `script.js`. Aprendi a conferir se o arquivo foi salvo e a recarregar a página antes de concluir que o código está errado.

## O que eu faria diferente
- Criaria também uma issue para as melhorias visuais, para que todo o trabalho ficasse rastreado.
- Faria commits ainda menores durante a lógica do jogo, testando cada passo antes de seguir.

## Conclusão
O projeto mostrou que o Git vai além de "salvar o código": ele organiza o raciocínio, registra decisões e facilita encontrar erros. O fluxo de issue → branch → pull request → merge, que antes parecia burocrático, se mostrou útil mesmo em um projeto pequeno e individual.
