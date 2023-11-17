const path = require('path');
const db = require("../../dataBase/models");
const { Op } = require("sequelize");

module.exports = {
    products: async (req, res) => {
        try {
            // Sincronizar modelos con la base de datos
            await db.sequelize.sync();

            // Obtener todos los productos con sus categorías
            const products = await db.Product.findAll({
                attributes: ['id', 'name', 'description', 'img', 'price'],
                include: [{
                    model: db.Category,
                    attributes: ['id', 'name'],
                    as: 'category'
                }]
            });

            // Mapear productos con nombres de categorías
            const productsApi = products.map((product) => ({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: {
                    id: product.category.id,
                    name: product.category.name
                },
                detail: `http://localhost:3001/api/products/${product.id}`,
                urlImage: `http://localhost:3001/images/products/${product.img}`
            }));

            // Obtener todas las categorías
            const categories = await db.Category.findAll({
                attributes: ['id', 'name'],
                include: [{
                    model: db.Product,
                    attributes: ['id'],
                    as: 'products'
                }]
            });

            // Contar productos por categoría
            const countByCategory = categories.map(category => ({
                [category.name]: category.products.length
            }));

            // Objeto que entrega la API
            res.json({
                status: 200,
                count: products.length,
                countByCategory,
                data: productsApi
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                error: "Internal Server Error",
                details: error.message
            });
        }
    },

    productsDetail: async (req, res) => {
        try {
            const oneProduct = await db.Product.findOne({
                where: { id: req.params.id },
                attributes: ['id', 'name', 'description', 'category_id', 'img', 'price']
            });
    
            if (!oneProduct) {
                return res.status(404).json({
                    status: 404,
                    error: "Product not found"
                });
            }
    
            // Construir la respuesta JSON
            const productDetail = {
                id: oneProduct.id,
                name: oneProduct.name,
                description: oneProduct.description,
                category_id: oneProduct.category_id,
                img: oneProduct.img,
                price: oneProduct.price,
                urlImage: `http://localhost:3001/images/products/${oneProduct.img}`
            };
    
            res.json({
                status: 200,
                data: productDetail
            });
    
        } catch (error) {
            console.error(error);
    
            // Verificar si es un error de Sequelize
            if (error.name === 'SequelizeDatabaseError') {
                return res.status(500).json({
                    status: 500,
                    error: "Internal Server Error",
                    details: error.message
                });
            }
    
            // Otro tipo de error
            res.status(500).json({
                status: 500,
                error: "Internal Server Error"
            });
        }
    },
    checkout: async (req, res) => {
        //return res.send({ ...req.body, userId: req.session.userLog.id });
        let order = await db.Order.create(
          { ...req.body, userId: req.session.user.id },
          {
            include: db.Order.OrderItems,
          }
        );
        res.json({ ok: true, status: 200, order: order });
      },
};