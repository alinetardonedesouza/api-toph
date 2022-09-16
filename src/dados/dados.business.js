const repositories = require('./dados.repository')
const error = require('../services/error')

//Business: Camada de negócios -> faz as validações e chama o banco de dados (repository)
exports.criaDados = async (dados) => {

    try {

        const dadosCriados = await repositories.create(dados)

        if (!dadosCriados) {

            throw error.notFound()
        }

        return dadosCriados

    } catch (error) {

        throw error
    }
}

exports.pegaDados = async (queries) => {

    try {

        const dadosEncontrados = await repositories.find(queries)

        if (!dadosEncontrados) {

            throw error.notFound()
        }

        return dadosEncontrados

    } catch (error) {

        throw error
    }
}