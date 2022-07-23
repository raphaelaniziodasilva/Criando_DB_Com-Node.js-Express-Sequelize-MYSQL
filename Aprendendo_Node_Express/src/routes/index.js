// As rotas elas só devem configurar o caminho, falar olha o caminho é esse vai para este controller aqui e vai para esse código aqui

// A rota tem sua única responsabilidade, que é definir qual vai ser a rota e para qual controler.

// importar o express
const express = require("express")

// importando o produtoControler que esta no arquivo produtoControllers.js
const produtoControler = require("../controllers/protudosControllers")

// ativar o recurso de rotas para poder criar novas rotas neste arquivo
const routes = express.Router() 


// criar uma rota para cadastrar protudos usaremos o metodo post: chamando o nosso produtoControler e acessando o metodo cadastrarProduto
routes.post("/produto/criar", produtoControler.cadastrarProduto)

// criar uma rota para listar protudos usaremos o metodo get: chamando o nosso produtoControler e acessando o metodo listaDeProdutos   
routes.get("/produto/listar", produtoControler.listarProdutos)

// criar uma rota para deletar protudos usaremos o metodo delete: chamando o nosso produtoControler e acessando o metodo deletarProduto
routes.delete("/produto/:id/deletar", produtoControler.deletarProduto)

// criar uma rota para atualizar protudos usaremos o metodo put: chamando o nosso produtoControler e acessando o metodo atualizarProduto
routes.put("/produto/:id/atualizar", produtoControler.atualizarProduto)


// Vamos exportar o modulo para depois usar dentro do app.js, vamos exportar todas as rotas depois, conforme forem criadas la no app.js
module.exports = routes 


/* 
 metodo HTTP:
 post = enviar informações
 get = pegar informações, listar
 put = editar informações
 delete = deletar informações
*/

/* 
// criando uma nova rota e chamando o nosso produtoControler e acessando o metodo listarProdutos
routes.get("/produto/lista", produtoControler.listarProdutos)
// criando uma nova rota e chamando o nosso produtoControler e acessando o metodo cadastrarProduto
routes.post("/produto", produtoControler.cadastrarProduto )
*/
