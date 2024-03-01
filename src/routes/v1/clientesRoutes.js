const clientesRouter = require('express').Router()

const clienteController = require('../../controllers/ClientesController')
//const Cliente = require('../../bd/models/Clientes')


clientesRouter.get('/',clienteController.getAllClientes)
clientesRouter.post('/', clienteController.createCliente)

module.exports = clientesRouter