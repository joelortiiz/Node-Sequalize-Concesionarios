const vehiculosrouter = require("express").Router();

const Vehiculo = require('../../bd/models/Vehiculo')

vehiculosrouter.get("/", async (req, res) =>{
    const Vehiculos = await Vehiculo.findAll()
    res.json(Vehiculos)
})

vehiculosrouter.get('/:nombre', async (req, res) =>{
    const nombre_veh = req.params.nombre
    const Vehiculos = await Vehiculo.findOne({where: { nombre_veh }})
    res.json(Vehiculos)
})

module.exports = vehiculosrouter
