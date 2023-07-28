let productController = {
    detail: function(req, res) {
        res.render('productDetail');
    },
    cart: function(req, res){
        res.render('cart');
    } 
}

module.exports = productController;