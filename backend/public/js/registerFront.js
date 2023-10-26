window.addEventListener('load', function () {
    let formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function(e){
        e.preventDefault()
        let nombre = document.querySelector('#first_name')
        if(nombre.value === ''){
            alert('El campo esta vacio')
        }
    })
})

/* let campoApellido = document.querySelector('#last_name');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let campoImagen = document.querySelector('#image');     */
/*     campoNombre.addEventListener('input', e =>{
            if(this.value == ""){
                this.nextElementSibling.innerText = '';
            } else if(this.value.length < 2){
                alert('El campo debe ser mas de 2 caracteres')
            }
    })
    campoApellido.addEventListener('input', e => {
        if(inputActual.value == ""){
            inputActual.nextElementSibling.innerText = '';
        } else if(inputActual.value.length < 2){
            alert('El campo debe se mas de 2 caracteres')
        }
    })
    campoEmail.addEventListener('input', e => {
        if(inputActual.value == ""){
            inputActual.nextElementSibling.innerText = '';
        }else (!validateEmail(email)) 
        emailError.innerHTML = "Por favor, ingrese un email válido.";
        return false;
        
    })
    
    campoImagen.addEventListener('input', e => {
        if(inputActual){
            
        }
    })
    
    
    
    campoPassword.addEventListener('input', e =>{
        const longitud = e.target.value.length;
        if(longitud < 8){
            alert('La contraseña debe tener mas de 8 caracteres')
        } else if(inputActual.value == ""){
            inputActual.nextElementSibling.innerText = '';
        }
    })
    
    
    formulario.addEventListener('submit', e => {
        inputs.forEach(inputActual => {
            if(inputActual.value.length == ""){
                e.preventDefault();
                inputActual.nextElementSibling.innerText = 'El campo es obligatorio'
            }
        })
        });
        
    })
    
}) */