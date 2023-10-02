let db = require('../dataBase/models');

let productossController = {
    list: function(req, res){
        db.Productos.findAll()
        .then(function(productos){
            res.render("listadoDeProductos", {productos:productos})
        })
    }
}