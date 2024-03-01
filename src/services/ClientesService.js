const Cliente = require('../bd/models/Clientes')

const getAllClientes = async()=> {
    const Clientes = await Cliente.findAll();

    return Clientes
}

const createCliente = async(newCliente)=> {
    const Clientes = await Cliente.create(newCliente)
    return Clientes
}
module.exports= {
    getAllClientes,
    createCliente
}