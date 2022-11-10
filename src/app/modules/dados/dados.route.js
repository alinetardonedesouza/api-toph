const express = require('express')
const router = express.Router()

const dadosController = require('./dados.controller')

//rotas (chamam a função dentro da controller de dados)
//Para acesso: http://localhost:3000/v1/dados

router.post('/', dadosController.criaDados)
router.get('/', dadosController.pegaDados)
router.get('/:id', dadosController.pegaDadosPorId)
router.get('/:usuarioId', dadosController.pegaDadosPorUsuarioId)

module.exports = router