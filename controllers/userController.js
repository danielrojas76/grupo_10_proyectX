const userModels = require('../models/userModels');

let userControllers = {

    getRegister: (req, res) => {
        const error = req.query.error;

        res.render('register', { error })
    },

    register: function (req, res) {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
        }

        const user = userModel.create(newUser);

        if (user.error) {
            res.redirect('/users/register?error=' + user.error);
        } else {
            res.redirect('/');
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