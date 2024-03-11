
const Cliente = require('./models/Clientes')
const Compra = require('./models/Compra')
const Fabricante = require('./models/Fabricantes')
const Vehiculo = require('./models/Vehiculo')

Vehiculo.belongsTo(Fabricante)
Fabricante.hasMany(Vehiculo)

Cliente.belongsToMany(Vehiculo,{through: Compra} )
Vehiculo.belongsToMany(Cliente, {through: Compra})

Vehiculo.hasMany(Compra)
Compra.belongsTo(Vehiculo)

Cliente.hasMany(Compra)
Compra.belongsTo(Cliente)



