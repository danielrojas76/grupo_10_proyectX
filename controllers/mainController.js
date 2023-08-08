const productModel = require('../models/mainModels')

let mainController = {
    home: function(req, res) {
        const productsVisited = productModel.findVisited();
        const productsInSale = productModel.findInSale();
        res.render('index', {productsVisited, productsInSale});
    }
}

module.exports = mainController;