// Aqui dentro desta database eu vou criar todo o processo de conexão, porque eu preciso fazer a conexão com o meu banco de dados 

// primeiro: eu vou importar o Sequelize
const Sequelize = require("sequelize");

// segundo: precisamos das informações para poder se conectar com o nosso banco de dados. Pegando os dados para fazer a comunicação com o banco de dados

const DB_NAME = "loja"; // nome do banco de dados tem que ser igual ao banco que criei no MYSQL
const DB_USER = "root"; // usuario. O nome do usuario tem que ser igual ao que foi criado no MYSQL quando foi feito a instalação
const DB_PASS = ""; // senha do meu root do MYSQL
const DB_CONFIG = { // informações sobre o banco de dados 
    dialect: "mysql", // modelo do banco de dados que esta sendo utilizado
    host: "localhost", // url para agente se conectar como estamos usando um banco local usamos o localhost
    port: 3306 // a porta que esta rodando dentro da nossa aplicação

    // para poder se conectar com o banco de dados MYSQL precisamos criar um banco dentro do MYSQL
    // criei um banco com o nome loja igual ao do DB_NAME = "loja"; para poder fazer a sincronização, cirei também uma tabela chamada produtos
};

// terceiro: precisamos fazer uma conexão para que a partir dela a gente consiga criar as nossas querys, criar as estruturas para poder acessar o nosso banco de dados 

let db = {}; // o objeto esta em let porque vamos precisar modificar esse objeto. Esse objeto para guardar a conexão do banco de dados, a partir desse objeto vamos poder fazer qualquer coisa em relação ao nosso banco de dados

// vamos criar uma estrutura para poder validar se deu certo a nossa conexão

// tratando o erro
try {
    // O objeto db ele vai ser igual a uma nova conexão dentro do nosso de dados e para isso agente vai utilizar o sequelize que foi importado ele vai vir em formato de classe onde vamos criar como se fosse um objeto novo, ja com essa conexão para a gente poder trabalhar com ela
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    // caso de algum erro nessa tentativa de fazer a conexão
    console.error("Error ao tentar uma conexão com banco de dados")
}

// quinto: vamos testar para ver se conseguimos nos conectar corretamente, o Sequelize vai nos ajudar a partir desse db, ele vai deixar método chamado authenticate que vai dizer se esta conectado ou não. vai fazer uma query de exemplo, uma query de teste dentro do nosso banco.

// vamos criar uma função para testar se tem conexão 

// para trabalhar com banco de dados a maioria das funções são assincronas para que possamos usar o poder do paralelismo

async function hasConection(){
    // tratando o erro
    try {
        await db.authenticate();
           // seder tudo certo
        console.log("Banco de dados conectado!")
    } catch (erro) {
        // se der errado
        console.error("Erro se conectando com o banco de dados")
    }
}

// sexto: exporta a função hasConection estrutura para adicionar o objeto db

Object.assign(db, {
    // Object.assign --> vai adicionar alguma coisa, um objeto ou metodo vamos ter duas propriedades, a qual o objeto que eu quero adicionar essa nova informação no caso o db. O segundo parametro é o que eu quero adicionar em formato de objeto 

    hasConection,

    // agora va para o servidor que e o app.js e importar essa estrutura
});

// quarto: precisamos export esse banco de dados db
module.exports = db;

// importanto o banco de dados database index.js no servidor app.js

