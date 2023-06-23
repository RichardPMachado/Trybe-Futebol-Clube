# TFC - README

O TFC é um site informativo sobre partidas e classificações de futebol (soccer)!

## Desenvolvimento de Backend

No time de desenvolvimento do TFC, seu squad ficou responsável por desenvolver uma API utilizando o método TDD e também integrar as aplicações através do docker-compose para que elas funcionem consumindo um banco de dados.

Nesse projeto, você vai construir um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento deve respeitar as regras de negócio providas no projeto, e sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto.

Para adicionar uma partida, é necessário ter um token, portanto, a pessoa deverá estar logada para fazer as alterações. Haverá um relacionamento entre as tabelas "teams" e "matches" para realizar as atualizações das partidas.

O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end, que será exibida para a pessoa usuária do sistema.

### Estrutura do projeto

O projeto é composto por 4 entidades importantes para sua estrutura:

#### 1. Banco de dados

- Será um container docker MySQL já configurado no docker-compose através de um serviço definido como "db".
- Tem o papel de fornecer dados para o serviço de backend.
- Durante a execução dos testes, sempre será acessado pelo Sequelize via porta 3002 do localhost.
- Você também pode conectar-se a um Cliente MySQL (Workbench, Beekeeper, DBeaver, etc.) utilizando as credenciais configuradas no docker-compose no serviço "db".

#### 2. Back-end

- Será o ambiente onde você realizará a maior parte das implementações exigidas.
- Deve rodar na porta 3001, pois o front-end faz requisições para ele nessa porta por padrão.
- Sua aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`.
- Garanta que o Express seja executado, e a aplicação ouça a porta configurada nas variáveis de ambiente.
- Todas as dependências extras (como joi, boom, express-async-errors) devem ser listadas no arquivo `app/backend/packages.npm`.

#### 3. Front-end

- O front-end já está concluído, não sendo necessário realizar modificações nele, exceto no Dockerfile que precisa ser configurado.
- Todos os testes, a partir do requisito de login, usam o puppeteer para simular uma pessoa acessando o site http://localhost:3000/.
- O front-end se comunica com o serviço de back-end através da URL http://localhost:3001 utilizando os endpoints que você deve construir nos requisitos.
- Recomendamos que, sempre que implementar um requisito no back-end, acesse a página no front-end que consome a implementação para validar se está funcionando conforme o esperado.

#### 4. Docker

- O docker-compose tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up`.
- Certifique-se de configurar corretamente os arquivos Dockerfile nas raízes do front-end e back-end para conseguir inicializar a aplicação.

### Pré-requisitos

Antes de iniciar o projeto, verifique se você possui as seguintes versões instaladas:

- Node.js v16.14.0 LTS
  - Para instalar o Node.js, utilize o nvm (Node Version Manager) e execute os comandos abaixo:
    ```
    nvm install 16.14 --lts
    nvm use 16.14
    nvm alias default 16.14
    ```

- Docker Compose v1.29.2
  - Para instalar o Docker Compose, siga as instruções presentes neste [link de referência para instalação no Ubuntu](https://docs.docker.com/compose/install/). Caso necessário, consulte a [documentação oficial](https://docs.docker.com/compose/) para desinstalação.

### Configuração do ambiente

- Verifique se sua Dockerfile do front-end e back-end está corretamente configurada, incluindo a cópia de arquivos, instalação de dependências e execução da aplicação.
- Certifique-se de que o Docker está adicionado no grupo de usuários, permitindo a execução do comando `docker ps` sem a necessidade do comando `sudo`. Consulte a solução [aqui](https://docs.docker.com/engine/install/linux-postinstall/).

### Comandos úteis

- O comando `docker-compose up -d` executa o projeto completo (banco, back-end e front-end) sem erros. Observe que esse comando pode levar até 10 minutos para terminar de rodar.

- O comando `docker-compose up --build` executa o projeto completo com reconstrução da imagem, sem erros no banco, back-end e front-end.

- Certifique-se de listar todas as dependências extras (joi, boom, express-async-errors) utilizadas no back-end no arquivo `app/backend/packages.npm`.

- A migration `app/backend/src/database/migrations/99999999999999-create-z.js` deve rodar sem problemas quando você executar o comando `npm run db:reset`.

- Se já tiver feito outras migrations e models, renomeie as seeders, retirando os '_' do nome dos arquivos, mudando o padrão de `20211116145440-teams.js_` para `20211116145440-teams.js`.

## Tecnologias

- Node.js
- Docker
- MySQL
- Sequelize
- Express
- Joi
- Boom
- Puppeteer (para testes no front-end)

Além disso, o projeto faz uso do Docker Compose para gerenciar os serviços e containers.

## Habilidades

- Desenvolvimento de uma API utilizando o método TDD (Test-Driven Development).
- Integração de aplicações utilizando o Docker Compose.
- Modelagem de dados utilizando o Sequelize.
- Implementação de regras de negócio para manipulação de dados.
- Construção de endpoints para comunicação entre o front-end e o back-end.
- Configuração e utilização de bancos de dados MySQL.
- Utilização de bibliotecas como Express, Joi, Boom e Puppeteer.
- Realização de testes automatizados com Puppeteer.
- Configuração e utilização do Node.js na versão 16.14.0 LTS.
- Configuração e utilização do Docker Compose na versão 1.29.2.
- Essas habilidades permitiram o desenvolvimento de um back-end dockerizado e a criação de uma API funcional, capaz de ser consumida pelo front-end do projeto TFC.

Agora você está pronto para iniciar o projeto TFC e realizar as implementações necessárias. Boa sorte!
