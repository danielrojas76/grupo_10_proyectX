const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv");

module.exports = (sequelize, DataTypes) => {
let alias = 'Tipo de Pago';

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
}
let config = {
    tableName: 'Tipe Payment',
    timestamps: false,
}

    const Type_payment = sequelize.define(alias, cols, config);

    return Type_payment;
}