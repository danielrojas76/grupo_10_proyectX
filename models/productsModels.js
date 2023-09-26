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
    },
    findVisited: () => {
        const products = model.findAll();
        const productsVisited = products.filter(product => product.category === "visited");
        return productsVisited;
    },
    productDelete: (id) => {
        let products = model.findAll();

        let productNews = products.filter(cadaProduct => cadaProduct.id !== id);

        let productsJSON = JSON.stringify(productNews);

        return fs.writeFileSync(productsFilePath, productsJSON, "utf-8")
    },
    productCreate: (newProduct) => {
        let products = model.findAll();

        let lastProductId = products[products.length-1].id

        let productNews = {
            id: lastProductId + 1,
            ...newProduct
        }

        products.push(productNews);

        let productsJSON = JSON.stringify(products)

        fs.writeFileSync(productsFilePath, productsJSON, 'utf-8')

        return productNews
    },

    productUpdate: (productUpdated) => {
        let products = model.findAll();

        let productIndex = products.findIndex(cadaProduct => cadaProduct.id == productUpdated.id) 

        products[productIndex] = productUpdated

        let productsJSON = JSON.stringify(products)

        fs.writeFileSync(productsFilePath, productsJSON, 'utf-8')
    },

    search: function(Keyword){
        let products = model.findAll();
        let productsFind = products.filter(product => product.name.toLowerCase().includes(Keyword.toLowerCase()));
        return productsFind;
    }
};

module.exports = model;