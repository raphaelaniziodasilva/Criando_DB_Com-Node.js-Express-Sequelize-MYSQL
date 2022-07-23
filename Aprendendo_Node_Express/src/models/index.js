// Aqui vamos fazer todo o relacionamento das nossas tabelas

// O sequelize criou alguns metodos para nos ajudar no relacionamento que são: belongsTo, hasMany, hasOne e belongsToMany

//para cada modelo criado na pasta models eu vou ter que importar ele aqui
// importando os models
const Fabricantes = require("./Fabricantes")
const Produtos = require("./Produtos")

// Fazendo o relacionamento de Produtos com Fabricantes, sabemos que produtos ele pertence a um fabricantes
Produtos.belongsTo(Fabricantes, {
    foreignKey: "fabricante_id" // especificando a foreignKey
})
// sabemos que Fabricantes tem muitos Produtos
Fabricantes.hasMany(Produtos, {
    foreignKey: "fabricante_id" //  aqui a foreignKey se mantém a mesma 
})

// precisamos exportar o objeto, toda vez que eu for importar vou precisar importar os objetos por aqui, poque eles já vão ter feito a associação
// para cada modelo criado na pasta models eu vou ter exportar ele aqui
module.exports = {
    Fabricantes,
    Produtos

    // vamos importar essas informações la no controllers.js
}   

/* vamos precisar alterar a estrutura de cadastrar produto que esta no arquivo controllers.js para poder ter acesso a ele e dizer que esse produto pertence a um fabricante
quando eu for listar os produtos eu vou querer ver as informções do fabricante:
vamos precisar alterar a estrutura de listar produto que esta no arquivo controllers.js para poder ter acesso e mostrar as informações do fabricante
*/


