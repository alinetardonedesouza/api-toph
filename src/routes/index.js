const dadosRoute = require('../dados/dados.route')

//Index das rotas: aqui é onde o localhost vai bater
//Para acessar qualquer uma das outras rotas, é necessário colocar
//http://localhost:3000/v1

module.exports = app => {

    app
        .use('/v1', dadosRoute)
}