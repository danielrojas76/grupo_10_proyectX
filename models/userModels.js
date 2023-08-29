const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const model = {
    fileRoute: path.join(__dirname, '../data/usersDataBase.json'),

    create: (userData) => {
        const emailInUse = model.findByEmail(userData.email);

        if (emailInUse) {
            return ({
                error: 'Este email ya esta registrado'
            })
        }

        let users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

        const newUser = {
            id: uuid.v4(),
            ...userData
        };

        newUser.password = bcrypt.hashSync(newUser.password, 15);

        users.push(newUser);

        const userJson = JSON.stringify(users);

        fs.writeFileSync(model.fileRoute, usersJson, 'utf-8');

        return newUser;
    },

    findByEmail: (email) => {
        const users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

        const coincidence = users.find(usuarioActual => usuarioActual.email === email);
        
        return coincidence || null;
    },

    findAll: ( )=> {

    }
}