// Neste arquivo de controllers serve justamente para organizar as nossas requisições, as estruturas que temos no nosso projeto

// Temos que criar um controller novo, criar os seus metodos: geralmente criamos um objeto aqui para poder exportar toda essa estrutura. Nas rotas devemos importar o seu controller e para cada rota voce deve dizer "Essa rota use esse método aqui deste controller", "Essa outra rota usa este outro método".  

// Vamos criar um crude em cima da tabela chamada produtos de um banco de dados de loja

/* importar Produtos.js que esta na pasta models, esse e o jeito de importar diretamene
const Produtos = require("../models/Produtos")
*/

// vou importar a partir do meu objeto que esta sendo exportado la no index.js
const { Produtos, Fabricantes, Categorias } = require("../models/index")

const produtoControler = {

     // cadastrar produtos: vamos precisar das informações que vai ser o nome, preco e quantidade que esta na tabela do MSQL ou na pasta models no arquivo produto.js.

     // toda a requisição dentro do banco de dados, toda operação do nosso banco de dados ela e uma funão assíncrona vou precisar utilizar o "async await"
     async cadastrarProduto(req, res) {

     // vamos desestruturar o nosso objeto body para ficar mais facil de lidar com essas informações, a partir do req body eu vou retirar essas informações que eu recebi na minha request

     // vamos precisar adicionar a chave estrangeira fabricante_id a estrutura de cadastrar produto para ter acesso e dizer que esse produto pertence a um fabricante

     // Vamos utilizar a função: set que ela vai setar uma informação la dentro, categorias_id

        const {nome, preco, quantidade, fabricante_id, categorias_id}  = req.body

        // se estamos querendo cadastrar um produto dentro do nosso banco de dados a partir do nosso modelo o sequelize vai dar uma função chamada Create, passando o objeto para create ela vai cadastrar essa estrutura

        // crie uma const = await porque vai ser uma promesse, a partir do Produto use o metodo create e passe um objeto para ele falando quais são as partes das colunas: que são nome, preco e quantidade

        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricante_id // chave estrangeira: foreignkey
        })

           // Vamos utilizar a função: set que ela vai setar uma informação aqui dentro, categorias_id
           // pesquisando a categoria pelo banco
           const categoria = await Categorias.findByPk(categorias_id) 

           // setando a categoria
           await novoProduto.setCategorias(categoria)

           res.json(novoProduto) // a resposta esta sendo enviado para o insomnia

            // va para o insomnia e crie uma estrutura com o nome de cadastrar produto do tipo post
    },


    // vamos listar todos os produtos que ja foram cadastrados, vamos usar a função assincrona
    // essa e uma outra maneira de criar função assincrona
    listarProdutos: async (req, res) => {

       // vamos criar uma variavel para armazenar as informações vai ser igual a await porque é uma promisse 
       // o metodo findAll() vai procurar todos os produtos dentro da tabela

       // vamos precisar alterar findAll e incluir as informações que ele tem relacionado com fabricantes

        const listaDeProdutos = await Produtos.findAll(
            {
                // Para acessar as informações do fabricante vamos incluir o Fabricante
                // include: Fabricantes, // precisamos importar o model

                // Para acessar as informações da categoria vamos incluir a Categoria
                include: Categorias
            }
        ) // vai procurar todos os produtos 

        res.json(listaDeProdutos) // pegando a lista e devolvendo no formato json no insomnia

        // va para o insomnia e crie uma estrutura com o nome de listar produto do tipo get
    },

    //listar psicologo pelo id e devolver um objeto com todas as informações
    async showProdutos (req, res){
        try {
            const findProdutos = await Produtos.findAll({
            where: {
                id: req.params.id
            }})

            res.status(200).json(findPsicologo);
        } catch (err) {
            res.status(404).json("Id não encontrado")
        }
    },
    
    // vamos deletar produtos que ja foram cadastrados, vamos usar a função assincrona
    async deletarProduto (req, res) {

        // vamos precisar receber o id do produto que o usuario quer deletar, vamos desestruturar do req.params por que ele e um objeto e a partir dele usar o id que vai receber para mim, que e o id do produto que eu quero deletar
        const { id } = req.params

        // o metodo destroy e utilizado para deletar o produto 
        await Produtos.destroy({

            // quando vamos fazer qual quer tipo de delete a gente usa a clásula where do SQL para poder especificar qual produto a gente quer deletar, 
            where: {
                // especificar qual produto que eu quero excluir, aqui vai dizer qual e o parâmetro, coluna, ou valor que vai ser filtrada, eu quero excluir a culuna id
                id,
            }
        })

        res.json("Produto deletado meu chapa") // deolvendo mensagem para o insomnia

        // va para o insomnia e crie uma estrutura com o nome de deletar produtos produto do tipo delete
    },


    // vamos atualizar produtos que ja foram cadastrados, vamos usar a função assincrona
    async atualizarProduto (req, res) {

        // vamos precisar do id para saber qual produto vai ser atualizado
        const { id } = req.params

        // vamos precisar receber quais são as novas informações que vai ser atualizadas
        const {nome, preco, quantidade}  = req.body

        // o metodo update e utilizado para atualizar os produto, esse método vai receber dois parâmetros. Esses parâmetros são primeiro: os dados que vai ser atualizados 
        const produtoAtualizado = await Produtos.update({
            nome,
            preco,
            quantidade,

        }, {
            // segundo: especificar qual produto que eu quero atualizar a culuna id
            where: {
                id,
            }

            // Vou atualizar so o nome não quero atualizar o preço e nem a quantidade
            // preço e quantidade que não vai ser atualizado, quando não mandamos nehuma informação o JS vai tratar como undefined, e o sequelize tem uma inteligencia que se a informação que esta passando for undefined ele não vai alterar a propriedade original dentro do banco de dados. Seu eu so mudar o nome so vai ser atualizado o nome
        })

        res.json("Produto Atualizado") // deolvendo mensagem para o insomnia

        // va para o insomnia e crie uma estrutura com o nome de atualizar produto do tipo put
    }
}

// o objeto produtoControler precisa ser exportado
module.exports = produtoControler

/*
const produtoControler = {
    // nese objeto vai ter varios metodos e cada um desses metodos vai ser utilizado por alguma rota
    // agente sempre vai receber esse req e res porque esse controle vai ser chamado pela nossa rota e vai receber essa estrutura e aqui vamos controlar o que vai acontecer com a requisição que vamos receber do nosso usuario 

    listarProdutos: (req, res) => {
        res.json([ {nome: "Xbox sires X"}, {nome: "Controler 47"}, {nome: "Fone Reat Seat"} ])
    },

    cadastrarProduto (req, res) {
        console.log(req.body) // vai mostrar a resposta no terminal
        res.json("Produto cadastrado with suscess") // vai mostrar a resposta no insomnia
    },

    // vamos importar essa estrutura e criar uma nova rota no arquivo index.js
}
*/
