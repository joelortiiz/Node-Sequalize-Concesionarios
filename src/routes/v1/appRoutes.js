const router = require('express').Router()

const vehiculosRouter = require('./vehiculosRoutes')


router.use("/v1/concesionario/vehiculos/", vehiculosRouter)


module.exports = router