const path = require('path')
const db = require("../../dataBase/models")
const { Op } = require("sequelize")

const Product = db.Product;

module.exports = {
    products: async (req, res) => {
        try {
            let product = await Product.findAll({
                attributes: ['id', 'name', 'description', 'category_id']
            });
            let productApi = product.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category_id: product.category_id,
                    detail: 'http://localhost:3000/api/products/' + product.id,
                }
            })

            res.json({
                status:200,
                count: product.length,
                countByCategory: {},
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
                attributes: ['id', 'name', 'description', 'category_id', 'img']
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
