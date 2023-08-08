const productsModel = require('../models/productsModels')

let productController = {
    detail: function(req, res) {
        const id = Number(req.params.id);
        const productFind = productsModel.findById(id)
        res.render('productDetail', {productFind});
    },

    cart: function(req, res){
        res.render('cart');
    } 
}

module.exports = productController;