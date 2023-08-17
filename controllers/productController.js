const productsModel = require('../models/productsModels')

let productController = {
    products: function(req, res) {
        const products = productsModel.findAll();
        res.render('products', {products});
    },

    search: (req, res) => {
		let searchKeyword = req.query.keywords;
		let productsFind = productsModel.search(searchKeyword);
		res.render('results', {products: productsFind, result: searchKeyword})
	},

    detail: function(req, res) {
        const id = Number(req.params.id);
        const productFind = productsModel.findById(id)
        const productsVisited = productsModel.findVisited();
        res.render('productDetail', {productFind, productsVisited});
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
			image: req.file ? req.file.filename : req.body["old-image"]		
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