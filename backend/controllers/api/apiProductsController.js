const path = require('path')
const db = require("../../dataBase/models")
const { Op } = require("sequelize")

const Product = db.Product;

module.exports = {
    count: async (req, res) => {
        try {
            const product = await Product.findAll()

            const response = {
                meta: {
                    status: 200,
                    total: product.length,
                    url: req.originalUrl
                },

                data: product
            }

            res.json(response)

        } catch (error) {
            console.log(error);
        }
    },
    inSale: async (req, res) => {
        try {
            const productsInSale = await db.Product.findAll({
                where: {
                    category_id: 1
                }
            })

            const response = {
                meta: {
                    status: 200,
                    total: productsInSale.length,
                    url: req.originalUrl
                },

                data: productsInSale
            }
            res.json(response)

        } catch (error) {
            console.log(error);
        }
    },
    recomended: async(req, res) => {
        try {
            const productsRecomended = await db.Product.findAll({
            where: {
                category_id: 2
            }
        })

        const response = {
            meta: {
                status: 200,
                total: productsRecomended.length,
                url: req.originalUrl
            },

            data: productsRecomended
        }
        res.json(response)
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

}




/*  const productsVisited = await db.Product.findAll({
     where: {
         category_id: 1
     }
 }) */