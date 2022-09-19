//Camada do banco de dados: aqui a magia acontece (as lágrimas tbm)

exports.create = async (dados) => {

    return `Id: ${dados.id} - Criado com sucesso!`
    
    // return await Dados.create(dados, { transaction })
}

exports.find = async (dados) => {
    
    return `Retornando com sucesso!`

    // return await Dados.find(dados, { transaction })
}
