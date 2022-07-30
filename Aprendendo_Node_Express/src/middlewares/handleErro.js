/* Toda vez que a gente for fazer o processo de validação, ela precisa devolver algum erro para o úsuario quando tiver feio essa request. 

Vamos montar essa função que vai pegar o erro e quando acontecer esse o erro e vai devolver como resposta. Ainda não e a validação
*/

// importando express-jwt
const UnauthorizedError = require("express-jwt")

// importando express-validation
const { ValidationError } = require("express-validation")

// exportando a função, aqui só vai cair qualquer coisa de erro

// error: toda vez que for gerado um novo erro, ele vai ser passado para dentro dessa nossa função por meio desse parametro, e ele vai analisar e decidir o que vai acontecer 
module.exports = (error, req, res, next) => {

    // vamos fazer uma validação para saber o tipo de erro
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)
    }
    if (error instanceof UnauthorizedError) {
        return res.status(error.status).json(error)

        /* A gente vai ter que enviar esse token via header no cabeçalho da nossa estrutura do insomnia cadastrar produtos
        Crie um new header: Authorization

        Vamos passar no value do nosso token mas temos o prefixo que vai ajudar a entender o que e um jwt que esse prefixo e o Bearer token. Bearer mais o valor do nosso token que foi gerado pelo login

        Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ0ZXN0ZUBlbWFpbC5jb20iLCJub21lIjoiVGVzdGUiLCJpYXQiOjE2NTkxOTU4MjB9.i4IXZcI4mHZxF8cZGLcP2Gh0XWZQhXG1tcb5Arn6T2w
        */
    }
    // caso esse erro não seja do tipo validation erro, vai ser um erro generico
    return res.status(401).json(error) 

    // Agora vamos colocar ele para rodar de forma global, va para o servidor app.js e faça a importação
}
// lembrando que esse handleErro não e a validação em si, ele so vai captar o erro para poder devolver como resposta para o nosso usuario

// Agora vamos começar a fazer o processo de validação daquilo que a gente quer, de cada rota. Vamos criar uma nova pasta chamada de validations e dentro dessa pasta iremos criar uma outra pasta com o nome da tabela que queremos para fazer essas validações  

