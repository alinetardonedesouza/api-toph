const business = require('./dados.business')

//Controller: recebe os dados da rota e redireciona pra camada de negócios (business)
class clsDados {

    static async criaDados(req, res) {

        try {

           const {dados} = req.body
           
           if(!dados) return res.status(400).send("Parâmetros não enviados.")

            let dadosCriados = await business.criaDados(dados)

            return res.status(201).json(dadosCriados)

        } catch (error) {
            console.log(error)

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async editaDados(req, res) {

        try {

            const { dados } = req.body
            const { dadoId } = req.params

            if (!dados || !dadoId) return res.status(400).send("Parâmetros não enviados.")

            let dadoEditado = await business.editaDados(dadoId, dados)

            return res.status(200).json(dadoEditado)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async pegaDados(req, res) {

        try {

            let dadosEncontrados = await business.pegaDados()

            return res.status(200).json(dadosEncontrados)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async pegaDadosPorId(req, res) {

        try {

            const { id } = req.params

            if (!id) return res.status(400).send("Parâmetros não enviados.")

            let dadosEncontrados = await business.pegaDadosPorId(id)

            return res.status(200).json(dadosEncontrados)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }

    static async pegaDadosPorUsuarioId(req, res) {

        try {

            const { usuarioId } = req.params

            if (!usuarioId) return res.status(400).send("Parâmetros não enviados.")

            let dadosEncontrados = await business.pegaDadosPorUsuarioId(usuarioId)

            return res.status(200).json(dadosEncontrados)

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsDados
