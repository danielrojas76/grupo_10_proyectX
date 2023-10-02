const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv")

module.exports = (sequelize, DataTypes) => {
    let alias = 'Categria del usuario';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        }
    };

    let config = {
        tableName: 'Categoria del usuario',
        timestamps: false,
    }
    
    const Category_user = sequelize.define(alias, cols, config);

    return Category_user;
}