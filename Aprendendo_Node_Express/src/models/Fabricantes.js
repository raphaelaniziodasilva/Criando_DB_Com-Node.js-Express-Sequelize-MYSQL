// importando a conexão com o banco de dados
const db = require("../database/index")

// importando os type: tipos de sequelize
const { DataTypes } = require("sequelize")

// vamos começar a criação do nosso modelo, criar uma constante chamada Fabricantes
const Fabricantes = db.define("Fabricantes", {
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
    tableName: "fabricante" // o nome da tabela que tem no banco de dados do MYSQL
})

// agora que o modelo foi criado vamos exportar a estrutura Produtos
module.exports = Fabricantes   

// Com o modelo de fabricanates montado, Agora vamos precisar incluir a foreign key dentro do arquivo produtos.js 

/* No MYSQL precisamos fazer a relação de 1 para n nas tabela de produtos e fabricante também la na pagina do EER Diagram para poder criar a nossa chave estrangeira: fabricantes_id
                     produtos <---> fabricante = fabricantes_id
*/