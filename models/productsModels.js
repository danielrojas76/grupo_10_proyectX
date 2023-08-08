const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const model = {
    findAll: () => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        return products;
    },

    findById: (id) =>{
        const products = model.findAll();
        const productFind = products.find(products => products.id === id)
        return productFind
    }
};

module.exports = model;