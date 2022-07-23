// importar o express
const express = require("express")

// ativar o recurso de rotas para poder criar novas rotas neste arquivo
const routes = express.Router() 

// a partir do routes agente vai usar todos os metodos do http get, post, put e delete, que servem para receber uma requisição na estrutura
routes.get("/", (req, res) => {
    console.log(req.query) // rotas query strings servem para fazer pesquisa simples e por onde vai essas informações que temos nessa estrutura, a informação vai aparecer no terminal

    res.send("A rota ja esta funcionando") // esta enviando para o navegador

    // a rota ja esta funcionando! só que precisamos importar esse modulo lá no app.js
})

// rotas parametrizadas: Eu quero criar uma rota para que o meu público ou usuario possa ver cada tipo de produto por uma identificação: id
routes.get("/produtos/:id?", (req, res) => { // a ? diz que o parâmetro e opcional o insomnia funciona
    console.log(req.params) 
    res.send("Produto com identificação: Id")  

    // Podemos ter varios parâmetros na rota vou adicionar uma categoria
    // routes.get("/produtos/:id/:categoria", (req, res) => {
})

// todas as rotas elas vão receber dois parametros principais: a rota que agente quer criar e o caminho que vai ter "/Home" e a função que ela vai executar
routes.post("/cadastrar", (req, res) => {
    res.send("Produto ou cliente cadastrado!")    

    // "/" --> significa a url e nessa url podemos mexer no caminho: "/Home", "/cadastrar" e etc...

    // Tudo feito agora va la no app insomnia crie uma requet com o nome de Cadastro vai ser do tipo post. Post: http://localhost:3000/cadastrar
})

// vamos montar o body do tipo json da nossa request la no insomnia
routes.post("/cad", (req, res)=> {
    console.log(req.body) // pegando as informações que esta no body do insomnia e mostrando no terminal
    res.json(req.body) // devolvendo uma resposta do body em Json no insomnia

    // como estamos enviando json para a estrutura das rotas, as rotas e o servidor precisam ter suporte para  receber essse tipo de dados.
    // precisamos fazer uma configuração no projeto que e ATIVAR esse recurso para utilizar a estrutura json. Va no app.js e ATIVE a estrutura json 
})


// Vamos exportar o modulo para depois usar dentro do app.js, vamos exportar todas as rotas depois, conforme forem criadas la no app.js
module.exports = routes 
