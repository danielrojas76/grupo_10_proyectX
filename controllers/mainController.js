let path = require('path')

let mainController = {
    home: function(req, res) {
        res.render(path.join(__dirname, '../views/index')) 
    }
}

module.exports = mainController;