
const Cliente = require('../bd/models/Clientes')
const ClientesService = require('../services/ClientesService')

const getAllClientes = async(req,res)=> {
    const Clientes = await ClientesService.getAllClientes()
    res.json(Clientes)
}
const createCliente = async(req,res)=> {
    const Clientes = await ClientesService.createCliente(req.body)
    res.json(Clientes)
}   
module.exports= {
    getAllClientes,
    createCliente
}