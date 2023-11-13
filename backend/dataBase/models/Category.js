module.exports = (sequelize, DataTypes) => {
let alias = 'Category';

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
    tableName: 'categories',
    timestamps: false,
}

    const Category = sequelize.define(alias, cols, config);

    return Category;
}