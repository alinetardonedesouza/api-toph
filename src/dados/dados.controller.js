// const business = require('./patient.business')

class clsDados {

    static async getDados(req, res) {

        try {

            console.log("alou")

            return res.status(201).json("hi")

        } catch (error) {

            return res.status(error.code ?? 500).send(error.message)
        }
    }
}

module.exports = clsDados
