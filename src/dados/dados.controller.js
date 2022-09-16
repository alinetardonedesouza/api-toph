const business = require('./dados.business')

//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class clsDados {

    static async criaDados(req, res) {

        try {

           const { dados } = req.body

           if(!dados) return res.status(400).send("Parâmetros não enviados.")

            let dadosCriados = await business.criaDados(dados)

            return res.status(201).json(dadosCriados)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async pegaDados(req, res) {

        try {

            const queries = req.query

           if(!queries) return res.status(400).send("Parâmetros não enviados.")

            let dadosEncontrados = await business.pegaDados(queries)

            return res.status(201).json(dadosEncontrados)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsDados
