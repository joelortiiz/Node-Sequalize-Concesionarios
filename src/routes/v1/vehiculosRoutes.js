const vehiculosrouter = require("express").Router();

const Vehiculo = require('../../bd/models/Vehiculo')

vehiculosrouter.get("/", async (req, res) =>{
    const Vehiculos = await Vehiculo.findAll()
    res.json(Vehiculos)
})

module.exports = vehiculosrouter
