let userControllers = {
    register: function(req, res){
        res.render('register')},

    login: function(req, res){
        res.render('login')    
    },

    password: function(req, res){
        res.render('password')    
    },

    administrador: function(req, res){
        res.render('administrador')
    },
    admin: function(req, res){
        res.render('userAdmin')
    },
    stock: function(req, res){
        res.render('stock')
    }
}

module.exports = userControllers;