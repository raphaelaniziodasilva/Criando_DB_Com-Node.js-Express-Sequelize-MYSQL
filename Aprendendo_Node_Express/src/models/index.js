// Aqui vamos fazer todo o relacionamento das nossas tabelas

// O sequelize criou alguns metodos para nos ajudar no relacionamento que são: belongsTo, hasMany, hasOne e belongsToMany

//para cada modelo criado na pasta models eu vou ter que importar ele aqui
// importando os models
const CategoriaProduto = require("./CategoriaProduto")
const Categorias = require("./Categorias")
const Fabricantes = require("./Fabricantes")
const Produtos = require("./Produtos")
const Usuarios = require("./Usuarios")



// Fazendo o relacionamento de 1 para N Produtos com Fabricantes, sabemos que produtos ele pertence a um fabricantes
Produtos.belongsTo(Fabricantes, {
    foreignKey: "fabricante_id" // especificando a foreignKey
})
// Fazendo o relacionamento de 1 para N sabemos que Fabricantes tem muitos Produtos
Fabricantes.hasMany(Produtos, {
    foreignKey: "fabricante_id" //  aqui a foreignKey se mantém a mesma 

    /* vamos precisar alterar a estrutura de cadastrar produto que esta no arquivo controllers.js para poder ter acesso a ele e dizer que esse produto pertence a um fabricante
    quando eu for listar os produtos eu vou querer ver as informções do fabricante:
    vamos precisar alterar a estrutura de listar produto que esta no arquivo controllers.js para poder ter acesso e mostrar as informações do fabricante
    */
})

// Fazendo o relacionamento de N para N entre as entidades Produtos com Categorias, aonde produto pode estar em varias categorias e uma categoria pode ter varios pordutos
Produtos.belongsToMany(Categorias, {
    foreignKey: "produtos_id", // especificando a foreignKey
    through: CategoriaProduto // passando a tabela intermediaria    
})
Categorias.belongsToMany(Produtos, {
    foreignKey: "categorias_id", // especificando a foreignKey
    through: CategoriaProduto // passando a tabela intermediaria   
    
    /* 
    Vamos para o arquivo controler, vamos especificar a categoria e dizer qual produto essa categoria pertence.
    Porém a categoria_Id não faz parte da tabela produtos.
    O sequelize vai nos dar o que se chama de special metodos, que são uma serie de metodos para poder lidar com as tabelas intermediarias sem exatamente ter que acessá-las de uma maneira direta pelo model.
    EX: eu posso a partir do produto pegar uma categoria a partir do model de produto sem ter que especificar a minha tabela intermediaria
    Utilizar a função: set, que ela vai setar uma informação la dentro, vamos setar a informação categorias_id em cadastrar produtos
    Para ter acesso a essas informações da categoria que ja foi cadastrada, vamos usar um include dentro de listar produtos
    */

})

// precisamos exportar o objeto, toda vez que eu for importar vou precisar importar os objetos por aqui, poque eles já vão ter feito a associação
// para cada modelo criado na pasta models eu vou ter exportar ele aqui
module.exports = {
    Fabricantes,
    Produtos,
    Categorias,
    Usuarios

    // vamos importar essas informações la no controllers.js
}   


