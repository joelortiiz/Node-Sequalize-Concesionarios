const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize('concesionarios0', 'root','', {
    host:'localhost',
    dialect:'mysql'
} )

module.exports = sequelize;
