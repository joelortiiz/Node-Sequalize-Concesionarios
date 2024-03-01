

const VehiculosService = require('../services/VehiculoService')

const getAllVehiculos = async(req, res)=> {
    const Vehiculos = await VehiculosService.getAllVehiculos();
    res.json(Vehiculos);
}

const getOneVehiculo = async(req,res) => {
    const nombre_veh = req.params.nombre
    const Vehiculos = await VehiculosService.getOneVehiculo(nombre_veh)
    res.json(Vehiculos)
}
const deleteVehiculo = async(req, res)=> {
    const id = req.params.id
    const Vehiculos = await VehiculosService.deleteVehiculo(id)
    res.json(Vehiculos)
}

module.exports = {
    getAllVehiculos,
    getOneVehiculo,
    deleteVehiculo
}