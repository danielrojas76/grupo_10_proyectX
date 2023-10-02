const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv");

module.exports = (sequelize, DataTypes) => {
let alias = 'Categories';

let cols = {
    id: {
        type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
    }
}

let config = {
    tableName: 'Categorias',
    timestamps: false,
}

    const Categories = sequelize.define(alias, cols, config);

    return Categories;
}