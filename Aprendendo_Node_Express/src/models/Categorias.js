// importando a conexão com o banco de dados
const db = require("../database/index")

// importando os type: tipos de sequelize
const { DataTypes } = require("sequelize")

const Categorias = db.define("Categorias", {
    id: { // id = coluna
        type: DataTypes.INTEGER, // tipo: inteiro
        primaryKey: true, // chave primaria
        autoIncrement: true, // auto incremento
    },
    nome: { // nome = coluna
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
    tableName: "categorias" // o nome da tabela que tem no banco de dados do MYSQL
})

// agora que o modelo foi criado vamos exportar a estrutura Produtos
module.exports = Categorias   