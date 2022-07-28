/* fazendo um processo de Login dentro de uma API, para isso vamos precisar de dois pacotes especificos que são Json web token JWT

O JWT vai nos ajudar a criar um Token que vai ser dado ao nosso úsuario quando ele fizer um login corretamente, e para cada coisa que ele for fazer cada request que ele for fazer dentro das nossas APIS ele deve informar esse token se não ele não vai ter acesso

E quem vai contralar se existe esse token ou não nas requests vai ser o segundo pacote que a gente precisa, que é o JWT-Express ou melhor express jwt

Express JWT ele que vai validar se está sendo passado e se esse jwt ele é valido ou algo do tipo

Vamos montar a estrutura do Login, lembrando que ja temos a parte de usuarios la na pasta models, temos o usuarioControllers na pasta controllers onde o usuario ja pode ser registrado, enão e por meio desses caras que vamos conseguir fazer o login

Vamos criar uma rota de login na pasta de rotas 
*/

// importando a tabela de Usuarios que esta na pasta models esta sendo exportado no index
const { Usuarios } = require("../models/index")

// importando o bcrypt para usar com a senha criptografada
const bcrypt = require("bcryptjs")

/* criando um CRUDE para login

Para o usuario fazer o login, ele tem que mandar para a gente o email e senha. Vamos criar uma validação para isso, para ele sempre poder mandar essas informações aqui pra gente. Agora va na pasta de validations e crie um arquivo para fazer a validação do login

Agora que o login esta validado vamos montar a estrutura
*/
const loginControler = {

    // criando o metodo de login para que o usuario consiga se conectar
    async login (req, res) {

        // recebendo o email e a senha para efetuar o login
        const {email, senha} = req.body

        // procurando o usuario no banco, para saber se esse email existe no banco
        // o findOne ele recebe um objeto aonde colocamos a clasula where para poder pesquisar o email do usuario
        const usuario = await Usuarios.findOne({
            where: {
                email,
            }
        }) 
        
        // fazendo validações, se o usuario não existir 
        if(!usuario) {
            return res.status(400).json("Email não cadastrado")
        }

        /* se o usuario existir eu preciso validar se a senha dele bate com a senha que a gente tem salva com a senha que ele digitou

        como estamos usando uma senha criptografada pelo bcrypt, so o bcrypt consegue dizer se uma senha digitada e igual a uma criptografada 

        vamos usar o metodo do bcrypt compareSync, onde ele vai comparar duas informações onde o primeiro eu passo a senha e segundo vou passar o rest que eu tenho salvo. Agora ele vai comparar e vai retornar true se a senha for igual o rest que a gente tem evai retorna false se for diferente
        */

        if(!bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json("Senha invalida")
        }

        // para saber se o login ja esta funcionando
        return res.json("Logado")
    }
}
// exportando loginControler
module.exports = loginControler

// Agora importe o loginControler nas rotas
