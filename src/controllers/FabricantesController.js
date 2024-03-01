const FabricantesService = require('../services/FabricanteService')

const getAllVehiclesByFabricante = async(req,res)=> {
    const id = req.params.id
    const Fabricas = await FabricantesService.getAllvehiclesByFabricantes(id)
    res.json(Fabricas)
}

const createFab =async(req,res)=> {
    const fabri = req.params.body
    const Fabricas = await FabricantesService.createfabricante(fabri)
    res.json(Fabricas)
}
module.exports = {getAllVehiclesByFabricante, createFab}