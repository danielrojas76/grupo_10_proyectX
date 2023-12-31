const db = require("../database/models")

module.exports = {
    home: async (req, res) => {
        try {
            const productsRecomended = await db.Product.findAll({
                where: {
                    category_id: 1
                }
            })

            const productsRecomen = await db.Product.findAll({
                where: {
                    category_id: 2
                }
            })
            
            const productsInSale = await db.Product.findAll({
                where: {
                    category_id: 3
                }
            })
            res.render("index", { productsInSale, productsRecomended, productsRecomen })
        } catch (error) {
            console.log(error);
        }
    },
    order: async function (req, res) {
        let order = await db.Order.findByPk(req.params.id, {
          include: db.Order.OrderItems,
        });
        //res.send(order);
        return res.render("order", { order });
    },
}
