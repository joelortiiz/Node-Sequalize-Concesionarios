const vehiculosrouter = require("express").Router();
const vehiculosController = require('../../controllers/VehiculosController')

vehiculosrouter.get("/", vehiculosController.getAllVehiculos)

vehiculosrouter.get('/:nombre', vehiculosController.getOneVehiculo)

module.exports = vehiculosrouter
