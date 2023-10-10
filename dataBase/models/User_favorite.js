module.exports = (sequelize, DataTypes) => {
let alias = 'User_favorite';
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
    tableName:'user_favorite',
    timestamps: false,
}

    const User_favorite = sequelize.define(alias, cols, config);

    return User_favorite;
} 