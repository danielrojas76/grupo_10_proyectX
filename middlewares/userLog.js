const middlewares = {
    userLog: (req, res, next) => {
        res.locals.userLog = req.session.user;

        next();
    },
    auth: (req, res, next) => {
        const admin = "matiascevallos7@gmail.com";

        const session = req.session.user;

        if (session.email == admin) {

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
            res.send("No tienes acceso a esta ruta")
        }
    }
};

module.exports = middlewares;