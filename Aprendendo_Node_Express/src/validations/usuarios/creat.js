// Aqui vamos fazer a validação dos dados do usuario

// precisamos importar duas coisas do express-validation, uma função chamada validate, e a blibioteca Joi para poder validar, e ela que vai poder validar
const {validate, Joi} = require("express-validation")

// vamos exportar a estrutura de validação, validate passando um objeto de configuração, onde vamos ter toda a estrutura para conseguir validar as informações
module.exports = validate({
    /*
    Quando a gente esta montando uma request, podemos receber algumas coisas por exemplo: pode receber um body, uma query string, um parametro. Então vamos validar de acordo com essas informações
    Na request: insomnia estamos recebendo um body, e esse body que vamos passar aqui. Vamos passar um parametro chamado body e vamos passar um objeto montando todas as estruturas de cada campo que esse body precisa receber.
    Não pode ser um objeto simples vamos utilizar o joy nele
    */
    body: Joi.object({ // vai montar um objeto de validação para o body receber

        // precisamos do campo nome para o usuario digitar e ele vai ter uma validação obrigatorias

        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required()
        

        // validação do tipo string e ele e obrigatorio
         // validação do tipo string e tem que ter no minimo 8 caracteres ou podemos colocar maximo de caracteres tbm e obrigatorio  

        // O tipo de validação ja esta criado, agora eu preciso colocar essa validação na rota que eu vou receber essas informações

    })

    /* Aqui e aonde vai gerar o erro ele que vai validar se existe, e se o erro existir ele vai jogar para o middleware no arquivo handleErro.js que vai captar o erro, vai receber esse erro caso ele exista na nossa request.
    Então o Joi gera esse erro enquanto o validation, capta esse erro para poder devolver como uma resposta para o usuario
    */
})