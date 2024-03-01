const Cliente = require('../bd/models/Clientes')
const Compra = require('../bd/models/Compra')
const Fabricante = require('../bd/models/Fabricantes')
const Vehiculo = require('../bd/models/Vehiculo')

const getAllCompras = async()=> {
    const Compras = await Compra.findAll(
        {
            include:[{
                model: Cliente,
                attributes: ['nombre_cli']
            }, {
                model: Vehiculo,
                attributes:['nombre_veh'],
                include:[
                    {
                        model: Fabricante,
                        attributes: ['nombre_fab']
                    }]
            }], attributes:['precio_compra', 'fecha_compra']
        }
    )
    return Compras
}
const crearCompra =async(compranueva)=> {
    const Compras = await Compra.create(compranueva)
    return Compras 
}

module.exports = {
    getAllCompras,
    crearCompra
}