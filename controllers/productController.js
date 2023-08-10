const productsModel = require('../models/productsModels')

let productController = {
    detail: function(req, res) {
        const id = Number(req.params.id);
        const productFind = productsModel.findById(id)
        res.render('productDetail', {productFind});
    },

    cart: function(req, res){
        res.render('cart');
    },

    stock: (req, res) => {
        const products = productsModel.findAll();
        res.render('stock', {products});
    },

    create: (req, res) => {
        res.render('productCreate');
    },

    edit: (req, res) => {
        const id = Number(req.params.id);
        const productFind = productsModel.findById(id);
        res.render('productEdit', {productFind});
    }
}

module.exports = productController;