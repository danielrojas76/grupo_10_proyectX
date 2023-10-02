const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { config } = require("dotenv");

module.exports = (sequelize, DataTypes) => {
let alias = 'Carrito de Compras';

let cols = {
    id: {
        type: DataTypes.INTEGER,
        primariKey: true,
        autoIncrement: true,
    },
user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Usuario',
        key: 'id'
    }

},
products_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Products',
        key: 'id'
    }
},
count: {
    type: DataTypes.INTEGER,
},
status: {
    type: DataTypes.TINYINT,
},
payment_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Type_payment',
        key: 'id' 
    }
}
}
let config = {
    tableName: 'Carrito',
    timestamps: false
}


    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}