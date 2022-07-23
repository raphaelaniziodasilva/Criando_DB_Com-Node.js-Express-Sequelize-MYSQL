// precisamos criar um servidor para que possamos utilizar a blibioteca Express
// importar o express
const express = require("express")

// importando rotas aqui! essas rotas vem da pasta routes arquivo index.js
const routes = require("./routes/index")

// importanto o banco de dados database
const db = require("./database/index")

// inicializar o servidor
const app = express()

// estrutura do banco de dados db
db.hasConection(); 

// ativando a estrutura json pelo post para converter o nosso servidor. Essa estrutura precisar ser antes das rotas
app.use(express.json())

// pedindo para o servidor usar as rotas externas que foram criadas em outros arquivos
app.use(routes)

// ativar um servidor: vamos dizer para o servidor qual porta que ele esta rodando porta: 3000 para que ele possa receber as requisições que vai vir do lado do cliente (client side)
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))