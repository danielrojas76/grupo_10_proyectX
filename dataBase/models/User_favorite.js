const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv");

module.exports = (sequelize, DataTypes) => {
let alias = 'Favoritos';
let cols = {
    id: {
        type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Usuario', 
            key: 'id' 
        }
    },
    product_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'Products',
            key: 'id' 
        }
    },
}

let config = {
    tableName:'Favortios del usuario',
    timestamps: false,
}

    const User_favorite = sequelize.define(alias, cols, config);

    return User_favorite;
} 