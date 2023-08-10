let userControllers = {
    register: function(req, res){
        res.render('register')},

    login: function(req, res){
        res.render('login')    
    },

    password: function(req, res){
        res.render('password')    
    },

    user: function(req, res){
        res.render('user')
    },
    admin: function(req, res){
        res.render('userAdmin')
    }
}

module.exports = userControllers;