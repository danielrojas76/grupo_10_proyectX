window.addEventListener('load', function () {
    let formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function (e) {
        let errores = []
        
        let nombre = document.querySelector('#first_name')
        if (nombre.value === '') {
            errores.push('El campo Nombre es obligatorio')
        } else if (nombre.value.length < 2) {
            errores.push("El campo debe se más de 2 caracteres")
        };
        
        let campoApellido = document.querySelector('#last_name')
        if (campoApellido.value == "") {
            errores.push('El campo Apellido es obligatorio ' )
        } else if (campoApellido.value.length < 2) {
            errores.push("El campo debe se más de 2 caracteres")
        };
        
        let campoPassword = document.querySelector('#password');
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        if (campoPassword.value == "") {
            errores.push('El campo Contraseña es obligatorio')
        }else if(campoPassword.value.length < 8){
            errores.push('Deberá tener al menos 8 caracteres.')
        }else if(regex.test(valor)){
            errores.push(valor+" es valido :-) !");
            return true;        
        }else{
            errores.push(valor+" NO es valido!");
            return false;
        }
  

        let campoImagen = document.querySelector('#imagen')
        /* campoImagen.addEventListener('change', function(){
        let imagen = inputImagen.files[0];

            // Verificar si se ha seleccionado una imagen
            if (!imagen) {
                errores.push('Por favor, selecciona una imagen.');
                return false;
            }

            // Verificar el tipo de archivo (debe ser una imagen)
            let tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];
            if (tiposPermitidos.indexOf(imagen.type) === -1) {
                errores.push('Formato de imagen no válido. Por favor, selecciona una imagen en formato JPEG, PNG o GIF.');
                return false;
            } */
        
        
        
        let campoEmail = document.querySelector('#email')
        let validaremail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (campoEmail.value == "") {
            errores.push('El campo Email debe ser obligatorio')
        } else if (validaremail.test(campoEmail.value)) {
            errores.push('Deberá ser un formato de e-mail válido.');
            return true;
        } else {
            errores.push('Deberá ser un formato de e-mail válido')
            return false;
        } 
        
        if(errores.length>0){
            e.preventDefault()
            let ulErrores = document.querySelector(".errores ul");
            errores.forEach(errores =>{
                ulErrores.innerHTML+= "<li>" + errores + "</li>"
            });
    };
            
        })
    })

