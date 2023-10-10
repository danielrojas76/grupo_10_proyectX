const db = require("../database/models");
const bcrypt = require('bcrypt');

module.exports = {
    getLogin: async (req, res) => {
        try {
            const error = req.body.error;
            res.render('login', { error });
        } catch (error) {
            console.log(error);
        }
    },
    login: async (req, res) => {                            //CHEQUEAR LO DE LAS VALIDACIONES Y LO DE BUSCAR LA CONTRASEÑA Y MAIL
        const userId = req.params.id
        const userEmail = req.params.email
        const userPassword = req.params.password

        try {
            const userLogin = await db.User.findByPk(userId, {
                where: { email: userEmail }
            })

            if (!userLogin) {
                return res.redirect('/user/login?error=El mail o la contraseña son incorrecta')
            }

            const validPw = bcrypt.compareSync(req.body.password, await db.User.findByPk(userId, {
                where: { password: req.params.password }
            }))

            if (validPw) {
                if (req.body.remember === "on") {
                    res.cookie("email", userLogin, { maxAge: 1000 * 60 * 60 * 24 * 365 });
                } else {
                    console.log("No se quiere mantener la sesion iniciada");
                }
            }

            res.redirect("/")

        } catch (error) {
            res.redirect('/user/login?error=el mail o la contraseña son incorrecta')
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
            const errors = req.body.errors;
            res.render('register', { errors })

        } catch (error) {
            console.log(error);
        }
    },
    register: async (req, res) => {
        try {
            const newUser = await db.User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                date: req.body.date,
                email: req.body.email,
                password: req.body.password,
                sexos: req.body.sexos,
                image: req.file.filename
            }, { raw: true })
            if (user.error) {
                res.redirect('/users/register?error=' + user.error);
            } else {
                res.redirect("/", { newUser })
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
                image: req.file.filename
            }, {
                where: { id: userId }
            })
            res.redirect("/user", { userUpdate })

        } catch (error) {
            console.log(error);
        }
    }
};



