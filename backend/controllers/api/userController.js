const db = require("../../dataBase/models");
const Op = db.Sequelize.Op;

const controller = {
    users: async (req, res) => {
        // try cach para las promesas, porque trabas con base de datos
        try {
            // users almacena todos los usuarios con los datos que le pedis en "attributes"
            let users = await db.User.findAll({
                attributes: ['id', 'first_name', 'last_name', 'email', 'img']
            });
            // userApi almacena un array con los detalles que vos elijas usando el metodo "map"
            let usersApi = users.map((user) => {

                return {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    detail: 'http://localhost:3001/api/user/' + user.id,
                    urlImage: 'http://localhost:3001/images/users/' + user.img
                }
            })
            // respondes a la ruta con un json
            res.json({
                status: 200,
                count: users.length,
                data: usersApi,
            });

        } catch (error) {
            console.log(error);
        }

    },
    usersDetails: async (req, res) => {
        // oneUser almacena el usuario de la base de datos que coincida con el id que pasamos por parametro
        let oneUser = await db.User.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'first_name', 'last_name', 'email', 'img']
        })
        //respondemos con un json usando un spreed operator le sumamos una URL con la imagen
        res.json({
            status: 200,
            data: {
                ...oneUser.dataValues,
                urlImage: 'http://localhost:3001/images/users/' + oneUser.dataValues.img
            }
        });
    },
}




module.exports = controller