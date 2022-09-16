const express = require('express')
const router = express.Router()

const dadosController = require('./dados.controller')

//rotas (chamam a função dentro da controller de dados)
//Para acesso: http://localhost:3000/v1/dados

router.post('/dados', dadosController.criaDados)
router.get('/dados', dadosController.pegaDados)

module.exports = router