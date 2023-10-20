module.exports = (sequelize, DataTypes) => {
let alias = 'Cart';

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
product_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Product',
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
    tableName: 'cart',
    timestamps: false
}


    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}