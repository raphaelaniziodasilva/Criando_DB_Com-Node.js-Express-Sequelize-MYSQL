// Aqui vamos fazer a validação do login

// precisamos importar duas coisas do express-validation, uma função chamada validate, e a blibioteca Joi para poder validar, e ela que vai validar
const {validate, Joi} = require("express-validation")

// vamos exportar a estrutura de validação, validate passando um objeto de configuração, onde vamos ter toda a estrutura para conseguir validar as informações
module.exports = validate({
    
    body: Joi.object({ // vai montar um objeto de validação para o body receber

        email: Joi.string().email().required(),
        senha: Joi.string().required()
        
        // O tipo de validação ja esta criado, agora eu preciso colocar essa validação na rota que eu vou receber essas informações

    })
})