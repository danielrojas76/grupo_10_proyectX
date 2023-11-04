const db = require("../database/models")

module.exports = {
    home: async (req, res) => {
        try {
            const productsRecomended = await db.Product.findAll({
                where: {
                    category_id: 2
                }
            })
            const productsInSale = await db.Product.findAll({
                where: {
                    category_id: 1
                }
            })
            res.render("index", { productsInSale, productsRecomended })
        } catch (error) {
            console.log(error);
        }
    },
}
