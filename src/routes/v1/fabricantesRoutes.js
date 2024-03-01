const fabcontroller = require('../../controllers/FabricantesController')
const fabricanterouter = require('express').Router()

fabricanterouter.get("/:id", fabcontroller.getAllVehiclesByFabricante)
fabricanterouter.post("/", fabcontroller.createFab)

module.exports = fabricanterouter


