const sequelize = require('../bd')
const {Model, DataTypes} = require('sequelize')

class Compra extends Model {}

Compra.init({
    fecha_compra: {
        type: DataTypes.DATE,
        allowNull: false,

    },
    precio_compra: {
            type: DataTypes.FLOAT,
            allowNull: false
    }


}, {
    sequelize,
    modelName: "compras",
    timestamps: false
})

module.exports = Compra