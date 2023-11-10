const path = require('path')
const db = require("../../dataBase/models")
const { Op } = require("sequelize")

const Product = db.Product;

module.exports = {
    products: async (req, res) => {
        try {
            /////// productos ///////
            let product = await Product.findAll({
                attributes: ['id', 'name', 'description', 'category_id', 'img', 'price']
            });
            let productApi = product.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category: product.category_id == 1? 'En oferta' : 'Ultimo agregado',
                    price: product.price,
                    detail: 'http://localhost:3001/api/products/' + product.id,
                    urlImage: 'http://localhost:3001/images/products/' + product.img
                }
            })

            /////// categorias ///////

            let sale = await Product.findAll({
                where: {
                    category_id: 1
                }
            });

            let lastAdd = await Product.findAll({
                where: {
                    category_id: 2
                }
            })

            /////// objeto que entrega la API ///////

            res.json({
                status:200,
                count: product.length,
                countByCategory: [
                    {sale: sale.length}, 
                    {lastAdd: lastAdd.length}
                ],
                data: productApi
            });

        } catch (error) {
            console.log(error);
        }
    },
    productsDetail: async (req, res) => { 
        try {
            let oneProduct = await db.Product.findOne({
                where: {id: req.params.id},
                attributes: ['id', 'name', 'description', 'category_id', 'img', 'price']
            })

            res.json({
                stauts: 200,
                data: {
                    ...oneProduct.dataValues,
                    urlImage: 'http://localhost:3000/img/products/' + oneProduct.dataValues.img
                }
            })

        } catch (error) {
            console.log(error);
        }
    },


}
