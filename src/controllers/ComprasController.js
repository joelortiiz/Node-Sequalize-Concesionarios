const comprasservicio = require('../services/compraservicio')

const getAllCompras = async(req,res)=> {
    const Compras = await comprasservicio.getAllCompras()
    res.json(Compras)
}

const crearCompra = async(req, res)=> {
    const comprass = req.params.body
    const compras = await comprasservicio.crearCompra(comprass)
    res.json(compras)
}

module.exports = {
    getAllCompras,
    crearCompra
}