var express = require('express')
var router = express.Router()

// controle de validação da requisição
var validarRequisicaoProduto = require('../validators/validarRequisicaoProduto')

// chamada do controller
const pegarProdutos  = require("../controllers/ProdutoController");

router.post('/',validarRequisicaoProduto(),pegarProdutos)

module.exports = router