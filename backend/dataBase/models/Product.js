module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        img: {
            type: DataTypes.STRING(50),
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'products',
        timestamps: false,
    });

    // ASOCIACIONES /////////////////////////
    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
    };

    return Product;
};
