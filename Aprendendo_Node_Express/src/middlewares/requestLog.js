// Os Middlewares são funções do JavaScript mesmo então podemos criar as funções em JS 

// Os Middlewares servem para muitas coisas como por exemplo, fazer logs, para fazer uploads de arquivos, para poder fazer validação se foi enviada alguma informação ou não

/* podemos exportar uma função direta
 Os Middlewares vão receber três parametros req, res e o next, req de requisição, res de response e o next. O next é um cara que vai permitir passar de fato para o processamento.

 O next é uma função que podemos escolher se ele vai de fato para o processamento ou se a gente barra aquela informação ali.
*/ 

// Vamos fazer um Middleware que deveria estar logando as informações, a Rota que esta sendo chamada na nossa aplicação

module.exports = (req, res, next) => {
    // dentro da request temos acesso ao IP que esta sendo enviado e de quem esta solicitando essa request temos também acesso a originalURL, que e a rota que foi acessada

    console.log(` O Ip: ${req.ip} acessou a rota: ${req.originalUrl} `)
    next()


    /* eu tenho que colocar essa função para acontecer antes das requests. Temos duas formas de fazer isso:

    A forma Global: para ser exibido em todos os requests.

    Ou eu posso colocar em cada request que eu queira
    */

   /*
   Para colocar ip global e dizer qual rota ela esta acessando va no servidor no arquivo app.js e importe esse arquivo
   
   Para colocar ip local e dizer qual rota ela esta acessando va na pasta de routes e acesse o arquivo index.js
   */

}