const { Usuario } = require('../dataBase/models');
const { Op } = require('sequelize');

module.exports = {
    getAll: async (req, res) => {

        try{
            const usuarios = await Usuario.findAll({
                raw: true
            });

        } catch (error) {
            console.log(error);
        }

        res.send('Estas viendo los usuarios')
    },
    
    getById: async (req, res) => {
        const usuarioId = req.params.id;

        try {
            const usuario = Usuario.findByPk(usuarioId, { raw:true });

            /* Si queremos usar Find One:
            const usuario = await Usuario.findAll({
                raw: true,
                where: {
                    first_name: {
                        [Op.like]: '%a5'
                    }
                }
            })
            */ 
            console.log(usuario);
        } catch(error) {
            console.log(error);
        }

        res.send('Detalle de usuario ' + req.params.id)
    }
}