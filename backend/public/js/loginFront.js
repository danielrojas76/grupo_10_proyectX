window.addEventListener("load", function () {
    let formulario = document.querySelector("#form-login");
    let allInputs = Array.from(document.querySelectorAll("#form-login input"));
    let inputEmail = document.querySelector("#email")
    let inputPassword = document.querySelector("#password")
    let validarEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    allInputs.forEach(input => {
        input.addEventListener("input", e => {
            if (input.value.length == 0) {
                input.classList.add("is-invalid")
            }
            else {
                input.classList.remove("is-invalid")
                input.nextElementSibling.innerText = ""
            }
        })

        formulario.addEventListener("submit", e => {
            allInputs.forEach(input => {
                if (input.value.length == 0) {
                    e.preventDefault();
                    input.nextElementSibling.innerText = "El campo es obligatorio";
                }
            })
            if (validarEmail.test(inputEmail.value)){
                inputEmail.nextElementSibling.classList.replace("is-invalid","is-valid")
                inputEmail.style.color = "green"
            }           
            
            else if (regex.test(inputPassword.value)){
                inputPassword.nextElementSibling.classList.replace("is-invalid","is-valid")
            }
            else {
                e.preventDefault();
            }      
            


        })





    })

    /* formulario.addEventListener("submit", function(e) {
       
        let errores = []

        let campEmail = document.querySelector('#email')
        let validaremail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;
        if (campEmail.value == "") {
            errores.push('El campo debe ser obligatorio')
            
       }else if (validaremail.test(campEmail.value)) {
           errores.push('Deberá ser un formato de e-mail válido.');
           return true;
        } else {
            errores.push('Deberá ser un formato de e-mail válido')
            return false;
        }; 
    

        let campoPassword = document.querySelector('#password');
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
    }) */


})
