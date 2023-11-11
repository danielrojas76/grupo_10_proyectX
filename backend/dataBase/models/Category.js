module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
        }
    }, {
        tableName: 'categories',
        timestamps: false,
    });

    // ASOCIACIONES /////////////////////////
    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        });
    };

    return Category;
};
