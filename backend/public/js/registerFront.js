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

        let image= document.querySelector("#image");
        
        if(image.value === ""){
            errores.push("Debe cargar una imagen")
        } 
        
        if(errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            ulErrores.innerHTML = ""; // Limpiar la lista de errores antes de agregar nuevos errores
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>";
            });
        }
            
        })
    })

