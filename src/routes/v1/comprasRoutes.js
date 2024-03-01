const comprasController = require('../../controllers/ComprasController')
const comprasRouter = require('express').Router()


comprasRouter.get("/", comprasController.getAllCompras)
comprasRouter.post("/", comprasController.crearCompra)


module.exports = comprasRouter