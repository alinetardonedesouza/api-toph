const express = require('express')
const router = express.Router()

const dadosController = require('./dados.controller')

router.get('/', dadosController.getDados)

module.exports = router