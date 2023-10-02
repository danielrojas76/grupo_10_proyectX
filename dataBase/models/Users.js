const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuario';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(50)
        },
        last_name: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(50),
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories', // nombre del modelo (tabla) referenciada
                key: 'id' // nombre de la clave primaria referenciada
            }
        }
    }

    let config = {
        tableName: 'Usuarios Vip',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}