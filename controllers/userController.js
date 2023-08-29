const userModel = require('../models/userModels');


let userControllers = {
    register: function (req, res) {
        res.render('register')
    },


    getLogin: (req, res) => {
        const error = req.querry.error;
        res.render('login', { error });
    },



    postLogin: (req, res) => {
        const userInJson = userModels.findByEmail(req.body.email);

        if (!userInJson) {
            return res.redirect('/users/login?error=el mail o la contraseña son incorrecta');
        } 
        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

        
        if(validPw) {
            res.redirect('index')
            
        } else {
            res.redirect('/users/login?error=el mail o la contraseña son incorrecta');
        }
        
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