const Fabricante = require('../bd/models/Fabricantes')
const Vehiculo = require('../bd/models/Vehiculo')

const getAllvehiclesByFabricantes = async (id) => {
    const Fabricas = await Fabricante.findByPk(id, {
        include: [{
            model: Vehiculo,
            attributes: ['nombre_veh', 'precio_veh', 'unidades_veh']

        }],
        attributes: ['nombre_fab']
    })
    return Fabricas
}
const createfabricante = async (nuevaFabrica) => {
    const Fabricas = await Fabricante.create(nuevaFabrica)
}

module.exports = {
    getAllvehiclesByFabricantes,
    createfabricante
}