const sequelize = require("../bd")
const {Model, DataTypes } = require("sequelize")

class Vehiculo extends Model {}
Vehiculo.init(
    {
        id_veh:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, nombre_veh: {
            type: DataTypes.STRING,
            allowNull: false
        }, unidades_veh: {
            type: DataTypes.INTEGER,
            allowNull: false
        } ,precio_veh: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    }, {
        sequelize,
        modelName: "Vehiculo",
        timestamps: false
    }
)
module.exports = Vehiculo