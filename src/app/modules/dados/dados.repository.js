const { Dados } = require('../../../../models/index')

exports.create = async (dados) => {

    return await Dados.create(dados)
}

exports.update = async (dadosId, dados) => {

    return await Dados.update(dados, { where: { id: dadosId } })
}

exports.delete = async (dadosId) => {

    return await Dados.destroy({ where: { id: dadosId } })
}

exports.find = async (filter) => {

    return await Dados.findAll(filter)
}

exports.findByPK = async (id) => {

    return await Dados.findByPk(id)
}

exports.findOne = async (filter) => {

    return await Dados.findOne({ where: { filter } })
}