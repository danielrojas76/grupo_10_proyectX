const db = require("../database/models")

module.exports = {
    home: async (req, res) => {
        try {
            const productsVisited = await db.Product.findAll({
                where: {
                    category_id: 1
                }
            })
            const productsInSale = await db.Product.findAll({
                where: {
                    category_id: 2
                }
            })
            res.render("index", { productsInSale, productsVisited })
        } catch (error) {
            console.log(error);
        }
    },
}
