// importar usarios que esta na pasta models no arquivo index.js
const {Usuarios} = require("../models/index")

// importando o bcrypt
const bcrypt = require("bcryptjs")

// criando um crude para usuarios
const usuariosControler = {
    // registrar usuario
    async registro (req, res) {

        // desestruturando o objeto
        /* sempre quando a gente vai salvar algum usuario que envolve senha, é um dado muito sensivvel. Não podemos salvar por extenso a gente salva uma senha CRIPTOGRAFADA.
        Vamos usar o bcrypt para criptografar a nossa senha e a gente tem um pouco de segurança dentro do nosso sistema.
        O bcrypt tem dois métodos praticamente, que e um chamado de hash sync que vai gerar hash enquanto vamos ter um comparesync quando a gente quiser descobrir o que a senha que a pessoa digitou é igual ao hash uma sequencia de caracteres que a gente tenha salvo no banco.
        
        Vamos ter que instalar na nossa maquina o bcryptjs: use a linha de comando npm install bcryptjs     
        Para gerar a nossa estrutura, a nossa senha basta a gente importar o bcrypt aqui no nosso modelo
        */
        const {nome, email, senha} = req.body

        // agora podemos gerar uma senha cryptografada para salvar no lugar dessa senha, para agente não ter ela por extenso
        const newSenha = bcrypt.hashSync(senha, 10) // vai receber dois metodos a senha e o salt que é o numero que ajuda no processo de cryptografia

        const newUsuario = await Usuarios.create({
            nome,
            email,
            senha: newSenha // ai receber a senha cryptografada
        })

        return res.status(201).json(newUsuario)
        // agora va para o insomnia montar a request cadastro de usuario
        /*
        Para não deixar cadastrar nehum campo que esteja vazio no banco de dados, Vamos ter que fazer a validação de todos os dados, para nos ajudar com essas validações vamos usar o Express Validation que é uma bliblioteca que usa uma outra bliblioteca para poder validar.

        O express validation vai criar um middlewar para a gente para que possa ser mais simples todo esse processo de validação. Vamos usar o Joy que é uma bliblioteca extremamente famosa.
        No site do joy, Joy.dev e aonde tem toda a estrutura de como a gente pode validar cada coisa em si, porém precisamos primeiro montar a estrutura de validação, temos que instalar o Express validation que ja vem com o Joy junto

        Vamos ter que instalar na nossa maquina o Express validation que ja vem com o Joy: use a linha de comando: npm i express-validation --save  

        */

    } 


}

//  exportando o objeto 
module.exports = usuariosControler