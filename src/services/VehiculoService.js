const Vehiculo = require('../bd/models/Vehiculo')
const Vehiculo = require('../bd/models/Vehiculo')

const getAllVehiculos = async()=> {
    const Vehiculos = await Vehiculo.findAll()
    return Vehiculos
}
const getOneVehiculo = async(nombre)=> {
    const Vehiculos = await Vehiculo.findOne({where: {nombre_veh : nombre}})
    return Vehiculos
}
module.exports = {
    getAllVehiculos,
    getOneVehiculo,
    
}

