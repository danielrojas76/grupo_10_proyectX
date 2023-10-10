module.exports = (sequelize, DataTypes) => {
    let alias = 'User';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(50)
        },
        last_name: {
            type: DataTypes.STRING(50)
        },
        date: {
            type: DataTypes.DATE 
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        sexo: {
            type: DataTypes.STRING(50)
        },
        img: {
            type: DataTypes.STRING(50),
        },
        rol_id: {    
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }

    let config = {
        tableName: 'user',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}