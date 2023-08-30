

const userModels = require('../models/userModels');
const bcrypt = require('bcrypt');


let userControllers = {

    getRegister: (req, res) => {
        
        res.render('register', { error })

    },

    register: function (req, res) {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
        }


        const user = userModels.create(newUser);


        if (user.error) {
            res.redirect('/users/register?error=' + user.error);
        } else {
            res.redirect('/');
        }

    },
    getLogin: (req, res) => {
        const error = req.querry.error;
        res.render('login', { error });
    },


    postLogin: (req, res) => {
        const userInJson = userModels.findByEmail(req.body.email);

        if (!userInJson) {
            return res.redirect('/users/login?error=El mail o la contraseña son incorrecta');
        } 
        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

        
        if(validPw) {
            res.redirect('index')
            
        } else {
            res.redirect('/users/login?error=el mail o la contraseña son incorrecta');
        }
        

    },

    login: function (req, res) {
        res.render('login')

    },

    password: function (req, res) {
        res.render('password')
    },

    user: function (req, res) {
        res.render('user')
    },
    admin: function (req, res) {
        res.render('userAdmin')
    }
}

module.exports = userControllers;