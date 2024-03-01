

const VehiculosService = require('../services/VehiculoService')

const getAllVehiculos = async(req, res)=> {
    const Vehiculos = await VehiculosService.getAllVehiculos();
    res.json(Vehiculos);
}

const getOneVehiculo = async(req,res) => {
    const Vehiculos = await VehiculosService.getOneVehiculo(req.body)
    res.json(Vehiculos)
}
module.exports = {
    getAllVehiculos,
    getOneVehiculo
}