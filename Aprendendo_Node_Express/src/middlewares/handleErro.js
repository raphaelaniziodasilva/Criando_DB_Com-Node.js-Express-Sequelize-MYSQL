/* Toda vez que a gente for fazer esse processo de validação, ela precisa devolver algum erro para o úsuario quando tiver feio essa request. 
Vamos montar essa funçao que vai pegar quando acontecer esse o erro e vai devolver como resposta. Ainda não e a validação
*/
const { ValidationError } = require("express-validation")

// exportando a função, aqui só vai cair qualquer coisa de erro
// error: toda vez que for gerado um novo erro, ele vai ser passado para dentro dessa nossa função por meio desse parametro, e ele vai analisar e decidir o que vai acontecer 
module.exports = (error, req, res, next) => {

    // vamos fazer uma validação para saber o tipo de erro
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)

        // caso esse erro não seja do tipo validation erro, vai ser um erro generico
        return res.status(500).json(error) 
    }
    // Agora vamos colocar ele para rodar de forma global, va para o servidor app.js e faça a importação
}
// lembrando que esse handleErro não e a validação em si, ele so vai captar o erro para poder devolver como resposta para o nosso usuario

// Agora vamos começar a fazer o processo de validação daquilo que a gente quer, de cada rota. Vamos cirar uma nova pasta chamada de validation e dentro dessa pasta iremos criar uma outra pasta com o nome da tabela que queremos     para fazer essas validações  

