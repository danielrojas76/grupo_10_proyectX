module.exports = (sequelize, DataTypes) => {

let alias = 'Product';

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
    discount: {
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
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
};

let config = {
    tableName: 'products',
    timestamps: false,
};

    const Product = sequelize.define(alias, cols, config);

    return Product;
}