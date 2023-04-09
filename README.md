# Boas-vindas ao repositório do projeto Super Trunfo!

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  Neste projeto desenvolvi um jogo no estilo Super Trunfo! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

  * Criar um baralho com o tema livre;

  * Adicionar e remover uma carta do baralho;

  * Visualizar todas as cartas que foram adicionadas ao baralho;

  * Jogar com o baralho criado.

  ### Protótipo do projeto

  Você pode acessar um protótipo no link abaixo:

  https://www.figma.com/file/psAYBgwjQ1pQqBe3wJvljt/Tryunfo
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, fui capaz de:

  * Ler o estado de um componente e usá-lo para alterar o que exibimos no browser

  * Inicializar um componente, dando a ele um estado pré-definido

  * Atualizar o estado de um componente

  * Capturar eventos utilizando a sintaxe do React

  * Criar formulários utilizando sintaxe JSX com as tags: `input`, `textarea`, `select`, `form`, `checkbox`

  * Transmitir informações de componentes filhos para componentes pais via callbacks
</details>

# Orientações

<details>
  <summary><strong>‼️ Para visualizar o projeto</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:p4n1k0/project_super_trunfo.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd project_super_trunfo`

  2. Instale as dependências

  - `npm install`.
  
  3. Inicialize o projeto

  - `npm start`.  

</details>

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Desenvolvi uma aplicação em React com manipulação de estados em classes. Essa aplicação simula um jogo de **Super Trunfo**, desde a criação das cartas do seu baralho até a funcionalidade de jogar.

  Na renderização das cartas, minha aplicação possui três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.

  O tema do baralho é **livre**, então explore a sua criatividade! Mas use seu bom senso para a criação do seu baralho.

  ### :bulb: Renderização condicional :bulb:

  Em alguns requisitos foi necessária a utilização de renderização condicional. Você pode verificar a documentação do React [Renderização Condicional](https://pt-br.reactjs.org/docs/conditional-rendering.html).

  Este comportamento é utilizado no React para renderizar, ou não, determinado componente de acordo com uma condição _booleana_.
</details>

<details>
  <summary><strong>:information_source: Informações Adicionais </strong></summary><br />

  ### Informações sobre o Super Trunfo

  O Super Trunfo é um jogo de cartas que ficou muito popular no Brasil entre as décadas de 80 e 90, mas que faz bastante sucesso até hoje. Suas regras são bastante simples, por isso ele é considerado um jogo fácil de jogar. Apesar de ter regras simples, cada baralho  de Super Trunfo pode ter um tema diferente, o que o torna um jogo bastante divertido.

  Originalmente, o jogo de Super Trunfo é formado por um baralho de 32 cartas. Cada carta representa um item relacionado ao tema do jogo. Em cada carta também existe uma lista com características daquele item e cada característica possui um valor numérico. 

  Para começar o jogo, as cartas devem ser embaralhadas e divididas igualmente para cada participante. Em cada rodada cada pessoa pega somente a primeira carta do seu monte. Na primeira rodada uma pessoa escolhe qual característica quer comparar com as cartas das outras pessoas que estão jogando. Ganha quem tiver o maior número nessa característica. A pessoa que ganhou a rodada recebe as cartas das outras pessoas e escolhe qual característica quer comparar na próxima rodada. O jogo termina quando alguma pessoa tiver todas as cartas do baralho.

  Em cada baralho existe uma (e somente uma) carta Super Trunfo. Essa carta ganha de todas as outras cartas do baralho, independentemente dos valores das características.

  O jogo de Super Trunfo pode ser feito com praticamente qualquer tema, mas tradicionalmente os mais comuns são: carros, países, cidades ou animais.

  ### Criando, lendo, atualizando e apagando informações

  Quando estamos lidando com informações, temos 4 operações principais: __Create__ (criar), __Read__ (ler), __Update__ (atualizar) e __Delete__ (apagar). Com essas quatro operações, formamos o acrônimo CRUD. Esse acrônimo é um termo que será bastante utilizado daqui para frente na sua jornada como pessoa desenvolvedora.

  Nesse projeto comecei a lidar um pouco mais com essas operações, mas não fiz todas elas. Precisei criar, ler e apagar informações, mas não precisei desenvolver a função de editar.
</details>

<details>
  <summary><strong>🗣 Me dê feedbacks sobre o projeto!</strong></summary><br />
</details>

---
