# Provably Fair

Para garantir a equidade e a diversão, usamos um método comprovadamente justo para determinar o resultado de cada item que você desembala. Este método garante a aleatoriedade do jogo, da mesma forma que a justiça de rolar dados ou usar um baralho em um jogo físico.

## Resultado do Jogo

Existem três variáveis que determinam o item que você recebe:

1. **Sua Escolha:** Este é um código que você pode alterar a qualquer momento, semelhante a escolher 'pedra, papel ou tesoura' em um jogo. Você também pode ver as escolhas de outros usuários.

2. **Nossa Escolha:** Um código secreto revelado somente quando você optar por fazê-lo.

3. **Contagem de Jogos:** O número de jogos que você jogou.

O resultado é gerado usando uma combinação de:

- **Semente do Cliente:** Uma senha de seu navegador, que você pode alterar. Você também pode verificar as sementes de outros jogadores.

- **Semente do Servidor:** Um número longo fornecido por nós, mostrado em forma criptografada antes de você jogar. Isso garante um resultado predefinido mantendo a equidade. Você pode ver a Semente do Servidor sem criptografia após desembalar um item para verificar resultados anteriores.

- **Contagem de Jogos:** Garante que o resultado de cada jogo seja diferente.

## Probabilidade

A probabilidade de ganhar um item específico permanece constante, independentemente de quantas vezes você jogue. Não há um padrão para determinar quando os itens de valor serão ganhos - é tudo sobre pura aleatoriedade. Você pode verificar a probabilidade de cada item clicando em 'Mostrar chances' para ver as chances exibidas em forma de porcentagem.

# Verificação

Você pode verificar de forma independente qualquer rolagem anterior usando o código exibido abaixo. Basta inserir a semente do cliente, a semente do servidor não criptografada e a "Contagem de Jogos"/nonce de sua jogada. Você pode executar este código por conta própria usando o Node.js, mas entendemos que, para alguns de vocês, isso pode estar além de suas habilidades técnicas. Portanto, criamos uma maneira simples para você executar este código diretamente do seu navegador. Ele executa o mesmo código mostrado abaixo, sem a necessidade de configurar o Node.js em seu computador. Você só precisa inserir os 3 valores de semente: semente do cliente, semente do servidor e contagem de jogos antes de pressionar Executar.

# Executando localmente

Clone este repositório e execute `node .` no diretório raiz. Modifique as sementes e o nonce para verificar suas próprias rolagens.

# Executando diretamente em seu navegador

Abra o arquivo `index.html` em seu navegador e insira as sementes e o nonce para verificar suas próprias rolagens.
Ou acesse o codepen: [https://codepen.io/joaorafaelm/pen/MWLbxOG](https://codepen.io/joaorafaelm/pen/MWLbxOG)
