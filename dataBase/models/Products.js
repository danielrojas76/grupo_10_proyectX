const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv");

module.exports = (sequelize, DataTypes) => {

let alias = 'Productos';

let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },    
    name: {
        type: DataTypes.STRING(50),

    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER
    },
    img: {
        type: DataTypes.STRING(50)
    }
};

let config = {
    tableName: 'Productos',
    timestamps: false,
};

    const Products = sequelize.define(alias, cols, config);

    return Products;
}