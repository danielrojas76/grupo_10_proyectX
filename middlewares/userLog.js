/* const { User } = require("../database/models");

const middlewares = {
    userLog: (req, res, next) => {
        if (req.session.user) {
            next();
        }
    },
    guest: (req, res, next) => {
        if (!req.session.user) {
            next();
        } else {
            res.redirect("/")
        }
    },
    auth: /* async */ /* (req, res, next) => { * / */
    /* try {
        const userAdmin = await User.findOne({
            where: { rol_id: 1 }
        })
        if (userAdmin) {
            next();
        } else {
            res.redirect("/users/login")
        }
        
    } catch (error) {
        console.log(error);
    }
     */
    /*  if(req.session.user.rol_id == 1){
         next();
     } else (
         res.redirect("/users/login")
     )
 }
}; */
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
                res.redirect("/")
            }
        }
    }
module.exports = middlewares;