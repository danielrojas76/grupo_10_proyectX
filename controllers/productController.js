const db = require("../database/models")
const { Op } = require("sequelize")


module.exports = {
    products: async (req, res) => {
        try {
            const products = await db.Product.findAll({ raw: true });
            res.render("products", { products })

        } catch (error) {
            console.log(error);
        }
    },
    search: async (req, res) => {
        let searchKeyword = req.query.search

        try {
            let productsSearch = await db.Product.findAll({
                where: {
                    name: { [Op.like]: '%' + searchKeyword + '%' }
                }
            });

            res.render('results', { productsSearch, searchKeyword });
        } catch (error) {
            res.send(error);
        }
    },
    detail: async (req, res) => {
        const productId = req.params.id

        try {
            const productFind = await db.Product.findByPk(productId, {
                raw: true
            })

            const productsVisited = await db.Product.findAll({
                where: {
                    category_id: 1
                }
            })

            res.render("productDetail", { productFind, productsVisited })


        } catch (error) {
            console.log(error);
        }
    },
    cart: async (req, res) => {
        try {
            res.render("cart")
        } catch (error) {
            console.log(error);
        }
    },
    stock: async (req, res) => {
        try {
            const products = await db.Product.findAll({ raw: true });
            res.render("stock", { products })

        } catch (error) {
            console.log(error);
        }
    },
    edit: async (req, res) => {
        const productId = req.params.id

        try {
            const productFind = await db.Product.findByPk(productId, {
                raw: true
            })

            res.render("productEdit", { productFind })


        } catch (error) {
            console.log(error);
        }
    },
    store: async (req, res) => {
        const newProduct = await db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description,
            img: req.filename,
        }, { raw: true })
        try {
            res.redirect("/product/" + req.body.id + "/detail", { newProduct })   // DUDA !!        

        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            res.render("productCreate")
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const productId = req.params.id

        try {
            const updateProduct = await db.Product.update({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                description: req.body.description,
                image: req.file.filename,
            },
                {
                    where: { id: productId }
                })


            res.redirect("/product/" + id + "/detail", {updateProduct}) // DUDA !!

        } catch (error) {
            console.log(error);
        }
    },
    destroy: async (req, res) => {
        const productId = req.params.id

        const productDelete = await db.Product.destroy({
            where: { id: productId }
        })
        try {
            res.redirect("/", {productDelete})

        } catch (error) {
            console.log(error);
        }
    }

}

