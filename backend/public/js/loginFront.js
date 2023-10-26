window.addEventListener("load",  () => {
    let formulario = document.querySelector("#form-login");

    formulario.addEventListener("submit", function(e) {
       
        let errores = []

        let campEmail = document.querySelector('#usuario')
        let validaremail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;
        if (campEmail.value == "") {
            errores.push('El campo debe ser obligatorio')
       } else if (validaremail.test(campEmail.value)) {
            errores.push('Deberá ser un formato de e-mail válido.');
            return true;
        } else {
            errores.push('Deberá ser un formato de e-mail válido')
            return false;
        }; 
    

        let campoPassword = document.querySelector('#passw');
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        if (campoPassword.value == "") {
            errores.push('El campo Contraseña es obligatorio')

        }else if(regex.test(valor)){
            errores.push(valor+" es valido :-) !");
            return true;        
        }else{
            errores.push(valor+" NO es valido!");
            return false;
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
