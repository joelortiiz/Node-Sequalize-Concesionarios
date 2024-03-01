const router = require('express').Router()

const vehiculosRouter = require('./vehiculosRoutes')
const clientesRouter = require('./clientesRoutes')
const fabricasRouter = require('./fabricantesRoutes')
const comprasRouter = require('./comprasRoutes')


router.use("/v1/concesionario/vehiculos/", vehiculosRouter)
router.use("/v1/concesionario/clientes", clientesRouter)
router.use("/v1/concesionario/fabricantes/", fabricasRouter)
router.use("/v1/concesionario/compras/", comprasRouter)

module.exports = router