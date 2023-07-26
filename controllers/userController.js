let userControllers = {
    register: function(req, res){
        res.render('register')},

    login: function(req, res){
        res.render('login')    
    },

    password: function(req, res){
        res.render('password')    
    }
}

module.exports = userControllers;