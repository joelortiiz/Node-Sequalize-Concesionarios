const router = require('express').Router()

const vehiculosRouter = require('./vehiculosRoutes')
const clientesRouter = require('./clientesRoutes')


router.use("/v1/concesionario/vehiculos/", vehiculosRouter)
router.use("/v1/concesionario/clientes", clientesRouter)

module.exports = router