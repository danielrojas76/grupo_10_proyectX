const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');


const model = {
    findAll: () => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        return products
    },
    findVisited: () => {
        const products = model.findAll();
        const productsVisited = products.filter(product => product.category === "visited");
        return productsVisited;
    },
    findInSale: () => {
        const products = model.findAll();
        const productsInSale = products.filter(product => product.category === "in-sale");
        return productsInSale;
    }
}

module.exports = model;