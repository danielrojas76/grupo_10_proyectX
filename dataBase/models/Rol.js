module.exports = (sequelize, DataTypes) => {
    let alias = 'Rol';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        }
    };

    let config = {
        tableName: 'rol',
        timestamps: false,
    }
    
    const Rol = sequelize.define(alias, cols, config);

    return Rol;
}