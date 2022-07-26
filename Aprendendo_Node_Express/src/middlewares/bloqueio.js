// Vamos montar um middleware que vai bloquea o acesso se não tiver alguma coisa na query string, naquela estrutura de parametros que temos la no insomnia aonde passamos a url, http://localhost300...

module.exports = (req, res, next) => {
    const {pass} = req.query 

    // se não existe esse pass ou pass for diferente de banana
    if(!pass || pass !== "banana") {
        return res.status(400).json("errado")

        // so vou deixar ser processado se eu coloca ali na url um pass um token chamado banana se não tiver ele vai devolver a resposta errado por que foi um bad request
    }

    // se pass for igual a banana vai deixar passar e a request vai ser processada
    next()

    /* então o middleware e justamente o nosso segurança da balada que e o segurança do nosso sistema, ele que vai permitir passar ou não, fazer o log ou não, fazer um controle ou não, dentro da nossa estrutura. Antes de chegar no controler, chegou no controle ja esta certo para poder ser processado.
    O middleware serve para agir antes do controler para poder criar esses tipos de logicas
    */

}

// query string = http://localhost:3000/produtos?pass=banana --> esta na rota de lista produtos get

// importar middleware na pasta de rotas no arquivo index.js esse middleware vai rodar do lado do requestLog