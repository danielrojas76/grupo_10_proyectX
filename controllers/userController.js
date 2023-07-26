const path = require('path')

let userControllers = {
    register: function(req, res){
        res.render(path.join(__dirname, '../views/register'))},

    login: function(req, res){
        res.render(path.join(__dirname, '../views/login'))    
    },

    password: function(req, res){
        res.render(path.join(__dirname, '../views/password'))    
    }
}

module.exports = userControllers;