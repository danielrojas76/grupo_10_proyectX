const db = require("../database/models");
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')

module.exports = {
    getLogin: async (req, res) => {
        try {
            const error = req.body.error;
            res.render('login', { error });
        } catch (error) {
            console.log(error);
        }
    },
    login: async (req, res) => {
        const userEmail = req.body.email;
        const userPassword = req.body.password;
    
        try {
            const userLogin = await db.User.findOne({
                where: { email: userEmail },
                
            });
            if (!userLogin) {
                return res.redirect('/user/login?error=El correo o la contraseña son incorrectos');
            }
            const validPw = bcrypt.compareSync(userPassword, userLogin.password);
            if (validPw) {
                req.session.user = userLogin
                if (req.body.remember === "on") {
                    res.cookie("email", userEmail, { maxAge: 1000 * 60 * 60 * 24 * 365 });
                } else {
                    console.log("No se quiere mantener la sesión iniciada");
                }
                res.redirect("/");
            } else {
                res.redirect('/user/login?error=El correo o la contraseña son incorrectos');
            }
        } catch (error) {
            console.log(error);
            res.redirect('/user/login?error=Ha ocurrido un error en el inicio de sesión');
        }
    },
    password: async (req, res) => {
        try {
            res.render("password")
        } catch (error) {
            console.log(error);
        }
    },
    getRegister: async (req, res) => {
        try {
            const errors = req.query;
            console.log(errors)
            res.render('register', { errors })

        } catch (error) {
            console.log(error);
        }
    },
    register: async (req, res) => {
        try {
            let errors = validationResult(req)
            if(errors.isEmpty()){
                const newUser = await db.User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    date: req.body.date,
                    email: req.body.email,
                    password: bcrypt.hash(req.body.password, 10),
                    sexos: req.body.sexos,
                    img: req.file.filename,
                    rol_id: req.body.email.includes("proyectx") ? 1 : 2                
                }, { raw: true })  
            } else {
                //lista de errores
                let queryArray = errors.errors.map(error => '&' + error.path + '=' + error.msg)
                let queryString = queryArray.join('')
                
                res.redirect("/user/register?" + queryString)
            }
        } catch (error) {
            console.log(error);
        }
    },
    admin: async (req, res) => {
        res.render('userAdmin')
    },
    user: async (req, res) => {
        res.render('user')
    },
    logout: async (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        res.redirect('/');
    },
    userEdit: async (req, res) => {
        const userId = req.params.id
        try {
            const userFind = await db.User.findByPk(userId, {
                raw: true
            })
            const errors = req.body.errors;
            res.render('userEdit', { errors, userFind })

        }
        catch (error) {
            console.log(error);
        }
    },
    userUpdate: async (req, res) => {
        const userId = req.params.id

        try {
            const userUpdate = await db.User.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                date: req.body.date,
                email: req.body.email,
                password: req.body.password,
                sexos: req.body.sexos,
                img: req.file.filename
            }, {
                where: { id: userId }
            })
            res.redirect("/user")

        } catch (error) {
            console.log(error);
        }
    }
};