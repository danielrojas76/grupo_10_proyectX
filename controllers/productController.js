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
    },
    store: (req, res) => {
        if(req.file){
			let newProduct = {
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				category: req.body.category,
				description: req.body.description,
				image: req.file.filename,
			}
			
			let productNew = productsModel.productCreate(newProduct)
			
			res.redirect("/product/" + productNew.id + "/detail")
		}
		else {
			res.render("product-create-form")
		}        
    },

    update: (req, res) => {        
		let productUpdated = {
			id: Number(req.params.id),
			...req.body,
			image: req.file.filename,		
		}

		productsModel.productUpdate(productUpdated);

		res.redirect("/product/" + productUpdated.id + "/detail");
	},

    destroy: (req, res) => {
        const id = Number(req.params.id);
        
        productsModel.productDelete(id);

        res.redirect("/")
    }
}

module.exports = productController;