module.exports = (sequelize, DataTypes) => {
let alias = 'Type_payment';

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
    tableName: 'type_payment',
    timestamps: false,
}

    const Type_payment = sequelize.define(alias, cols, config);

    return Type_payment;
}