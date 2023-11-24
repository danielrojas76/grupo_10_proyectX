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

            const productsRecomended = await db.Product.findAll({
                where: {
                    category_id: productFind.category_id
                }
            })

            res.render("productDetail", { productFind, productsRecomended })


        } catch (error) {
            console.log(error);
        }
    },
    cart: async (req, res) => {
        try {
            // Obtener el carrito de sessionStorage si existe
            /* if(req.sessionStorage.getItem('carrito')){

                const carrito = JSON.parse(req.sessionStorage.getItem('carrito')) || [];
    
                res.render("cart", { carrito });
            } */
            res.render("cart")

        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
    },
    stock: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                attributes: ['id', 'name', 'description', 'img', 'price', 'discount'],
                include: [{
                    model: db.Category,
                    attributes: ['id', 'name'],
                    as: 'category'
                }]
            });
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

            let categorias = await db.Category.findAll({ raw: true })

            res.render("productEdit", { productFind, categorias })


        } catch (error) {
            console.log(error);
        }
    },
    store: async (req, res) => {

        /* console.log(newProduct) */
        let errors = []
        try {
            if (errors) {
                let newProduct = {
                    name: req.body.name,
                    price: req.body.price,
                    discount: req.body.discount,
                    category_id: req.body.category_id,
                    description: req.body.description,
                    /* img: req.file.filename, */
                }
                if (req.file !== undefined) {
                    let newProductIMG = {
                        ...newProduct,
                        img: req.file.filename
                    }
                    const product = await db.Product.create(newProductIMG, { raw: true })
                    res.redirect("/product/" + product.id + "/detail")   // DUDA !!        
                }
            } else {
                //lista de errores
                let queryArray = errors.errors.map(error => '&' + error.path + '=' + error.msg)
                let queryString = queryArray.join('')
                res.redirect("/product/create?" + queryString)
            }

        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const categorias = await db.Category.findAll({ raw: true })
            res.render("productCreate", { categorias })
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
                category_id: req.body.category_id,
                description: req.body.description,
                img: req.file ? req.file.filename : req.body["old-img"],
            },
                {
                    where: { id: productId }
                })


            res.redirect("/product/" + productId + "/detail") // DUDA !!

        } catch (error) {
            console.log(error);
        }
    },
    destroy: async (req, res) => {
        try {

            db.OrderItem.destroy({
                where:{
                    productId: req.params.id
                }
            })

            await db.Product.destroy({
                where: { id: req.params.id }
            })
            res.redirect("/")

        } catch (error) {
            console.log(error);
        }
    }
}

