// importando o express-jwt
const expressJWT = require("express-jwt")

// importando a secret
const secret = require("../configs/secret")

// vamos exportar uma função, a gente vai exportar a partir do expressJWT justamente uma função que vai gerar esse middleware, vamos passar como parametro um objeto e dentro passando as informações
module.exports = expressJWT ({

    // precisamos da secret para fazer um processo inverso da criptografia
    secret: secret.key,

    // vamos passar o tipo de algoritmo que a gente esta usando. O JWT pode usar varios tipos de algoritmos para gerar esse code, por padrão o jwt vai usar esse aqui algorithms: ["HS256"] 
    algorithms: ["HS256"]

    // justamente o algoritmo que agente esta usando de cirptografia 
})

// Agora vamos passar esse arquivo auth.js nas rotas que agente quer que exista essa autenticação, va para pasta de rotas e passe esse arquivo auth na rota de produtos, para não deixar cadastrar o produto se o usuario não estiver autenticado