const dadosRoute = require('../dados/dados.route')

module.exports = app => {

    app
        .use('/dados', dadosRoute)
}