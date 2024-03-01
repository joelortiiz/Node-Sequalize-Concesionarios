const vehiculosrouter = require("express").Router();
const vehiculosController = require('../../controllers/VehiculosController')

vehiculosrouter.get("/", vehiculosController.getAllVehiculos)

vehiculosrouter.get('/:nombre', vehiculosController.getOneVehiculo)
vehiculosrouter.delete("/:id", vehiculosController.deleteVehiculo)

module.exports = vehiculosrouter
