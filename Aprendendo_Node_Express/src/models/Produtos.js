// Precisamos criar cada arquivo desse para cada tabela que existe dentro do nosso projeto.

// importando a conexão com o banco de dados
const db = require("../database/index")

// A partir do sequelize aqui vamos precisar desestruturar o cara chamado DataTypes é ele que vai ter os dados "depara" que vai fazer o sequelize entender os type se e inteiro, real e etc..

// importando os type: tipos de sequelize
const { DataTypes } = require("sequelize")
const Fabricantes = require("./Fabricantes")

// vamos começar a criação do nosso modelo, criar uma constante chamada Produtos que e o mesmo nome do nosso modelo, arquivo

// vamos utilizar a partir do nosso banco de dados db, uma função chamada "define" e ela que vai criar de fato a nossa estrutura. O "define" vai explicar para o Sequelize que existe essa tabela.

// Vamos criar um modelo baseado na nossa tabela que esta no MYSQL a partir dessa função define. Ela vai receber três parâmetros o primeiro é o nome do nosso modelo, o nome: "Produtos" que a gente vai chamar quando precisar fazer qualquer operação dentro dessa tabela.

const Produtos = db.define("Produtos", {

    // segundo parâmetro e o parâmetro aonde vamos ter que especificar quais são as colunas que existem dentro dessa tabela. E explicar para o Sequelize como que elas estão criadas e definidas.

    id: { // id = coluna

        // No type precisamos fazer uma diferença, por que no JS como linguagem, ele não tem todos os tipos de dados que um banco de dados tem. Então o sequelizer vai precisar fazer um "depara" e para isso precisamos do sequelize em si. Va para cima dos codigos que você vai entender sobre os DataTypes

        type: DataTypes.INTEGER, // tipo: inteiro
        primaryKey: true, // chave primaria
        autoIncrement: true, // auto incremento
    },
    nome: { // nome = coluna
        type: DataTypes.STRING, // tipo: caractere
    },
    preco: { // preco = coluna
        type: DataTypes.FLOAT, // tipo: real valores que tem casas decimais
    },
    quantidade: { // quantidade = coluna
        type: DataTypes.INTEGER, // tipo: inteiro
    },

    // Incluindo a foreign key
    fabricante_id: {
        type: DataTypes.INTEGER,

        // reference vai dizer aonde que essa foreign key esta fazendo referência 
        references : {
            model: Fabricantes, // importando o model de fabricantes
            key: "id" // id da tabela fabricantes 
            
            // Vamos precisar montar essas informações, dizer especificamente como que essas tabelas: produtos e fabricantes se relacionam

            // cire um arquivo index.js e faça o relacionamento das tabelas
        }
    },
  
    // aqui temos as colunas de time steamp: Usamos essas duas colunas para poder controlar quando foi criado algum produto e quando foi a sua ultima atualização.
    
    // Essas duas colunas createdAt e updatedAt é o que o sequelize vai esperar por padrão e ele vai preenchê-las automaticamente. Para isso o nome dessas duas colunas tem que ser createdAt e updatedAt

    createdAt: { // createdAt = coluna
        type: DataTypes.DATE, // tipo: data
    },
    updatedAt: { // updatedAt = coluna
        type: DataTypes.DATE, // tipo: data
    },
}, {
    // vamos passar o terceiro parâmetro que e um parâmetro de configuração. Vamos especficar o nome da tabela 
    
    tableName: "produtos", // o nome da tabela que tem no banco de dados
})

// agora que o modelo foi criado vamos exportar a estrutura Produtos
module.exports = Produtos  

// Vamos fazer o relacionamento de 1 para n entre produtos e fabricantes, primeiro precisamos montar um modelo de fabricanates para montar essa relação aqui dentro do sequelize eu preciso ter as duas tabelas mapeadas
