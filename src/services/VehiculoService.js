const Vehiculo = require('../bd/models/Vehiculo')

const getAllVehiculos = async()=> {
    const Vehiculos = await Vehiculo.findAll()
    return Vehiculos
}
const getOneVehiculo = async(nombre)=> {
    const Vehiculos = await Vehiculo.findOne({where: {nombre_veh: nombre}})
    return Vehiculos
}
const updateVehiculoById = async(id, veh)=> {
    const Vehiculos = await Vehiculo.update(veh, {
        where: {
            id_veh : id
        }
    })
    return Vehiculos
}
const deleteVehiculo = async(id)=> {
    const Vehiculos = await Vehiculo.destroy({where: {id_veh: id}})
    return Vehiculos
}
module.exports = {
    getAllVehiculos,
    getOneVehiculo,
    deleteVehiculo,
    updateVehiculoById
}

