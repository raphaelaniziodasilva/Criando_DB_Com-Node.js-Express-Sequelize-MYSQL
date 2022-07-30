/* fazendo um processo de Login dentro de uma API, para isso vamos precisar de dois pacotes especificos que são Json web token JWT

O JWT vai nos ajudar a criar um Token que vai ser dado ao nosso úsuario quando ele fizer um login corretamente, e para cada coisa que ele for fazer cada request que ele for fazer dentro das nossas APIS ele deve informar esse token se não ele não vai ter acesso

E quem vai contralar se existe esse token ou não nas requests vai ser o segundo pacote que a gente precisa, que é o JWT-Express ou melhor express jwt

Express JWT ele que vai validar se está sendo passado e se esse jwt ele é valido ou algo do tipo

Vamos montar a estrutura do Login, lembrando que ja temos a parte de usuarios la na pasta models, temos o usuarioControllers na pasta controllers onde o usuario ja pode ser registrado, enão e por meio desses caras que vamos conseguir fazer o login

Vamos criar uma rota de login na pasta de rotas 
*/

// importando a tabela de Usuarios que esta na pasta models esta sendo exportado no index
const { Usuarios } = require("../models/index")

// importando o JWT, que vai ter um metodo chamado Sign in para a gente poder logar
const jwt = require("jsonwebtoken")

// importando a secret
const secret = require("../configs/secret")

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

        /* para saber se o login ja esta funcionando
        return res.json("Logado")
        */

        /* O login ja esta funcionando certinho. A diferença e que quando a gente ta fazendo processo de login em uma API eu preciso devolver um token, lembre-se que as nossas API não podem guardar nehum estado.

        Elas não podem saber quem é o usuario em si nas proximas requests.

        O usuario tem sempre que se identificar em cada request que ele vai fazer.

        Para não ter que ficar fazendo o login toda hora a gente cria um código token que vamos enviar paa ele.

        E quem fica resposanvel de usar isso é o Json web Token. Que é o JWT, que e uma das alternativas, uma das indicações segurança para autenticação mais famosa que tem no mundo de desenvolvimento.

        Geralmente e com os mais comuns que a gente tem, precisamos conhecer sobre o Json web token o JWT.

        Instalando o son web token o JWT va para o terminal e use a linha de comando: npm install jsonwebtoken

        Então o Json web token que vai nos ajudar a criar essa estrutura, a primeira coisa que precisamos fazer é ter uma chave de segurança. 

        Ele vai usar essa chave para quando ele criptografar esse token, ele poder voltar, diferente do bcrypt uma vez que ele e criptografado, ele não consegue saber qual era o dado originais. Nesse caso o Jwt, a gente sabe qual e os dados que tem dentro desse token porque no final das contas estava gerando o hash.

        E para esse hash ficar seguro, a gente gera uma chave de segurança nossa, que a gente tem que informar pra ele que ele vai misturar essa chave com a senha ou aquela informação que agente está colocando dentro desse token para ficar facil.

        Vamos criar uma nova pasta chamada config e dentro dessa pasta criar um arquivo chamado secret.js
        */

        // Se a senha estiver certa 
        const token = jwt.sign(
            {
            // aqui dentro vamos passar duas coisas, primeiro o que vamos chamar de Payload, que é o conteudo que eu quero que seja salvo dentro desse token. Geralmente a gente põe as informações do usuario, para poder ter acesso para alguma coisa que a gente precise utilizar.

            // salvei essas tres informações, que é importante para saber quando ele me envia um token, de quem e esse token e do que se trata
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome            
        },
           // segundo a nossa secret que esta pronta dentro da nossa pasta config, vamos importa esse secret pra ca e salvar corrretamente as informações aqui. 
           secret.key

           // com isso o JWT vai gerar um token aqui para a gente. E esse token a gente vai devolver como resposta da nossa estrutura de quando ele se logar, eu não vou devolver logado mas eu vou devolver um token que foi gerado para o usuario

        )

        // devolver o token que foi gerado para o usuario
        return res.json(token)

        /* Agora que a gente ja esta passando o token vamos precisar ver se a gente vai receber esse token de fato

        Vamos para o insomnia na estrutura do login e ver se recebemos esse token, e justamente esse token que vai carregar todas as informações que a gente colocou, e esse token que o usuario vai ter que mandar em todas as requests que ele quiser utilizar, todas aquelas que vai deixar privadas.

        Somente uma pessoa autenticada vai poder cadastrar os produto, para isso vamos ter que informar o token que foi gerado no insomnia.

        Para a gente poder criar esse midlleware que vai validar se exite o token e se ele está valido, vamos usar o express-jwt ele vai gerar um secret pra gente ou melhor, um midlleware que vai validar se existe ou não esse usuario e se ele esta valido ou não 

        Para instalar o express-jwt use a linha de cmando: npm install express-jwt porém use a 5.3.1 --> npm install express-jwt@5.3.1

        Com o express-jwt instalado vamos precisar configurar o middleware, va para a pasta de middlware e crie um arquivo chamando auth.js agora monte a estrutura  
        */
    }
}

// exportando loginControler
module.exports = loginControler

// Agora importe o loginControler nas rotas
