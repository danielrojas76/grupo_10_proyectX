const userModels = require('../models/userModels');
const bcrypt = require('bcrypt');


let userControllers = {

    getRegister: (req, res) => {
        const errors = req.body.errors;
        res.render('register', { errors })

    },

    register: (req, res) => {
        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            date: req.body.date,
            email: req.body.email,
            password: req.body.password,
            sexos: req.body.sexos,
            image: req.file.filename
        }

        console.log(newUser)

        const user = userModels.create(newUser);


        if (user.error) {
            res.redirect('/users/register?error=' + user.error);
        } else {
            res.redirect('/');
        }

    },
    getLogin: (req, res) => {
        const error = req.body.error;
        res.render('login', { error });
    },


    login: (req, res) => {
        const userInJson = userModels.findByEmail(req.body.email);

        if (!userInJson) {
            return res.redirect('/user/login?error=El mail o la contraseña son incorrecta');
        } 
        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

        
        if(validPw) {            
            if(req.body.remember === 'on'){                
                res.cookie('email', userInJson.email, { maxAge: 1000 * 60 * 60 * 24 * 365});
            } else {
                console.log('No se quiere mantener la sesión iniciada');
            }

            req.session.user = userInJson;

            res.redirect('/')
            
        } else {
            res.redirect('/user/login?error=el mail o la contraseña son incorrecta');
        }
        

    },
    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        res.redirect('/');
    },
    /* --------------------------------------------------------------------------------------------------------------------------------------------- */

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