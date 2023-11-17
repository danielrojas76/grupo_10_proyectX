
const middlewares = {

    userLog: (req, res, next) => {
        res.locals.userLog = req.session.user;

        next();
    },
    authCart: (req, res, next) => {
        if (!req.session.user) {
            return res.redirect("/user/login");
        }
        next();
    },
    auth: (req, res, next) => {
        const session = req.session.user;

        if (session.rol_id == 1) {

            next();
        }
        else {
            res.send("No tienes acceso a esta ruta")
        }
    },
    
    guest: (req, res, next) => {
        if (!req.session.user) {
            
            next();
        }
        else {
            res.redirect("/")
        }
    },
    
}
module.exports = middlewares;