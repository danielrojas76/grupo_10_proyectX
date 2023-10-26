const path = require('path');
const { body } = require('express-validator');

module.exports = {
    validationFormRegister: [
        body('first_name').notEmpty().withMessage('Debes completar el campo de nombre').bail()
            .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
        
        body('last_name').notEmpty().withMessage('Debes completar el campo de apellido').bail()
            .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),

        body("email").notEmpty().withMessage('Debes completar el campo de email').bail().isEmail().withMessage('Debe ser un email valido'),

        body("password").notEmpty().withMessage('Completar el campo de contraseña').bail().isLength({ min: 8 }).withMessage('Debe tener al menos 8 carecteres'),



        // --MUCHO MUY IMPORTANTE-- VALIDAR IMAGENES
        body('img').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
            if (file) {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error('Las extensiones permitidas son ' + acceptedExtensions.join(', '));
                }
            } else {
                throw new Error('Tienes que subir una imagen');
            }
            return true;
        })
    ],

    validationProducts: [
        body('name').notEmpty().withMessage('Debes completar el nombre del producto').bail()
            .isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres')
    ]
} 
