/* Validação de dados, quando estamos falando de back-end onde vamos receber informações para poder cadastrar no banco de dados para poder processar essas informações e elas precisam estar corretas ou elas precisam ser enviadas nas requests. 
É como podemos trazer essas validações e fornercer erros caso não seja montada a request da forma que a gente precisa. 
Vamos fazer a validação de dados da tabela Usuarios, vamos começar pelas rotas
*/

// importando a conexão com o banco de dados
const db = require("../database/index")

// importando os type: tipos de sequelize
const { DataTypes } = require("sequelize")

const Usuarios = db.define("Usuarios", {
    id: { // id = coluna
        type: DataTypes.INTEGER, // tipo: inteiro
        primaryKey: true, // chave primaria
        autoIncrement: true, // auto incremento
    },
    nome: { // nome = coluna
        type: DataTypes.STRING, // tipo: caractere
    },
    email: { // nome = coluna
        type: DataTypes.STRING, // tipo: caractere
    },
    senha: { // nome = coluna
        type: DataTypes.STRING, // tipo: caractere
    },
    
    // Essas duas colunas createdAt e updatedAt é o que o sequelize vai esperar por padrão e ele vai preenchê-las automaticamente. Para isso o nome dessas duas colunas tem que ser createdAt e updatedAt

    createdAt: { // createdAt = coluna
        type: DataTypes.DATE, // tipo: data
    },
    updatedAt: { // updatedAt = coluna
        type: DataTypes.DATE, // tipo: data
    },
}, {
    tableName: "usuarios" // o nome da tabela que tem no banco de dados do MYSQL
})

// agora que o modelo foi criado vamos exportar a estrutura Produtos
module.exports = Usuarios  

// TODA VEZ QUE A GENTE CRIA UM MODULO NOVO, NÃO SE ESQUEÇA DE EXPORTAR LA NO ARQUIVO INDEX.JS AONDE FAZEMOS AS RELAÇÕES