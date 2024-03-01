const sequelize = require('../bd')
const { Model, DataTypes } = require('sequelize')

class Fabricante extends Model { }

Fabricante.init(

    {
        id_fab: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El nombre no puede ser nulo"

                }, len: {
                    args: [0, 64],
                    msg: "Minimo 0 max 64;"
                }
            }

        }, nombre_fab: {
            type: DataTypes.STRING,
            allowNull: false
        }, direccion_fab: {
            type: DataTypes.STRING,
            allowNull: false

        }, telefono_fab: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    sequelize,
    modelName: "fabricantes",
    timestamps: false
}
)
module.exports = Fabricante;