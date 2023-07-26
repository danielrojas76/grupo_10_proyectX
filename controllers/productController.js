let path = require('path')

let productController = {
    detail: function(req, res) {
        res.render(path.join(__dirname, '../views/productDetail')) 
    }
}

module.exports = productController;