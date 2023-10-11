const path = require('path');
const {body} = require('express-validator');

module.exports = {
    validationFormRegister: [
        body('first_name').notEmpty().withMessage('Debes completar el campo de nombre').bail()
        .isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres'),

        // --MUCHO MUY IMPORTANTE-- VALIDAR IMAGENES
        body('img').custom((value, {req}) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg','.png','.jpeg','.gif'];
            if(file){
                let fileExtension = path.extname(file.originalname);
                if(!acceptedExtensions.includes(fileExtension)){
                    throw new Error('Las extensiones permitidas son ' + acceptedExtensions.join(', '));
            }
            } else {
                throw new Error('Tienes que subir una imagen');
            }
            return true;
        })
    ]
} 
