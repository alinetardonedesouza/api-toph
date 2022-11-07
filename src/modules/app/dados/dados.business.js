const repositories = require('./dados.repository')
const { errors } = require('../../../services/error')

//Business: Camada de negócios -> faz as validações e chama o banco de dados (repository)
exports.criaDados = async (dados) => {

    try {

        const dadosCriados = await repositories.create(dados)

        if (!dadosCriados) {

            throw errors.notFound()
        }

        return dadosCriados

    } catch (error) {

        throw error
    }
}

exports.pegaDados = async () => {

    try {

        const dadosEncontrados = await repositories.find()

        if (!dadosEncontrados) {

            throw errors.notFound()
        }

        return dadosEncontrados

    } catch (error) {

        throw error
    }
}

exports.pegaDadosPorId = async (id) => {

    try {

        const dadosEncontrados = await repositories.find(id)

        if (!dadosEncontrados) {

            throw errors.notFound()
        }

        return dadosEncontrados

    } catch (error) {

        throw error
    }
}

exports.pegaDadosPorUsuarioId = async (userId) => {

    try {

        const dadosEncontrados = await repositories.find(userId)

        if (!dadosEncontrados) {

            throw errors.notFound()
        }

        return dadosEncontrados

    } catch (error) {

        throw error
    }
}