// o Express tem o intuito de nos ajudar a criar o servidor com diversos recursos ja prontos

// vamos iniciar o projeto instalando o package.json: abra um terminal e use a linha de comando npm init -y

// com o  package.json criado vamos instalar o expres: use a linha de comando npm install express

// agora que o express foi instalado

// para limpar o terminal use a linha de comando clear

// crie uma pasta com o nome scr ou outro nome para organizar os seu projeto e faça a distribuição das outras pastas com os arquivos dentro neste caso vou usar o views, models e controllers e conforme o projeto for criado outras pastas iram surgir

// para começar a nossa aplicação precisamos criar um arquivo principal servidor usando o nome do arquivo.js neste caso usamos o app.js

// Vamos instalar o Nodemoon: O Nodemoon e um pacote que agente instala dentro do nosso projeto

// Vai nos ajudar na execução do nosso projeto ou seja toda vez que fizermos uma alteração num arquivo ele vai atualizar o nosso servidor automaticamente

// Execute no terminal a linha de comando npm install nodemon -D --> para instalar o pacote do nodemoon

// Para usar o Nodemoon a gente so precisa usar a sua estrutura e especificar qual e o arquivo 

// Execute no terminal a linha de comando nodemon app.js --> app.js: e o arquivo

//digite a linha de comando nodemon app.js, caso não funciome use --> npx nodemon app.js 

// para não ficar toda hora digitando vamos criar um comando dentro do package.json e na area de script e configure o script para poder executar alguma coisa da nossa aplicação

/* Adicone ao script 
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
*/

/* Quando adicionamos os arquivos dentro de uma pasta temos que atualizar os scripts também, va no package,json
Atualizano os scripts
 Adicone ao script 
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },

*/
// va para o terminal e use a linha de comando npm run start: para executar a aplicação
// npm run dev: para executar a estrutura

// ARMAZENAMENTO DE DADOS:
// Toda a operação que a gente faz dentro do sistema geralmente e automatizada por um framework geralmenete vamos colocar aqui de ORM
// As funções de um ORM e nos ajudar com toda a estrutura de um banco de dados, seja na sua criação, nas operações como Create, Select, Update, Delete e quanto as outras, porém trazendo toda a sintaxe do JavaScript pra cá. Ou seja, a ideia dos ORM é permitir que a gente possa manipilar todo o nosso banco de dados usando somente JavaScript.

// Vamos usar uma tecnologia um framework bem famoso do mercado, que é o SEQUELIZE, muito comum na utilização junto com o Express

// Para o projeto vamos precisar instalar duas coisas a bliblioteca em si, o Sequelize e é o que a gente vai chamar de driver para poder se conectar no banco de dados 

// Então existe um pacote, que é o que chamamos de driver, que vai fazer toda essa comunicação entre o Sequelizer e o banco que você deseja

// Vamos instalar essas duas coisas o framework Sequelize e o nosso driver do MYSQL que nesse caso vamos utilizar o mysql2

// abra um terminal e use a linha de comando: npm install sequelize mysql2

// com as duas blibliotecas que agente precisa instaladas, Agora agente pode começar pelo processo de configuração que exige que agente monte uma conexão com o nosso banco de dados. Cire uma pasta com o nome de database e um arquivo com o nome que vccê quiser 
 