window.addEventListener("load", function () {
    let formulario = document.querySelector("#formulario");
    let allInputs = document.querySelector('#formulario input')
    let nombre = document.querySelector("#name");
    let precio = document.querySelector("#price");
    let inputDiscount = document.querySelector('#discount')
    let inputCategoria = document.querySelector('#category')
    let descripcion = document.querySelector("#description");
    let image = document.querySelector("#image");

    formulario.addEventListener("submit", function (e) {
        if (nombre.value === "") {
            e.preventDefault();
            nombre.nextElementSibling.innerText = "El campo es obligatorio";
            nombre.nextElementSibling.classList.add("is-invalid")
        } else if (nombre.value.length < 5) {
            e.preventDefault();
            nombre.nextElementSibling.innerText = "el campo nombre debe tener como minimo 5 caracteres"
            nombre.nextElementSibling.classList.add("is-invalid")
        }
        else {
            
            nombre.nextElementSibling.classList.remove("is-invalid")
            nombre.nextElementSibling.innerText = ""
        }
        if (precio.value === "") {
            e.preventDefault();
            precio.nextElementSibling.innerText = "El campo es obligatorio";
            precio.nextElementSibling.classList.add("is-invalid")
        }
        else {
            
            precio.nextElementSibling.classList.remove("is-invalid")
            precio.nextElementSibling.innerText = ""
        }
        if (descripcion.value === "") {
            e.preventDefault();
            descripcion.nextElementSibling.innerText = "El campo es obligatorio";
            descripcion.nextElementSibling.classList.add("is-invalid")
        } else if (descripcion.value.length < 20) {
            e.preventDefault();
            descripcion.nextElementSibling.innerText = "el campo descripcion debe tener como minimo 20 caracteres"
            descripcion.nextElementSibling.classList.add("is-invalid")
        }
        else {
            
            descripcion.nextElementSibling.classList.remove("is-invalid")
            descripcion.nextElementSibling.innerText = ""
        }
        if (inputDiscount === "") {
            e.preventDefault();
            inputDiscount.nextElementSibling.innerText = "El campo es obligatorio";
            inputDiscount.nextElementSibling.classList.add("is-invalid")
        }
        else {
            
            inputDiscount.nextElementSibling.classList.remove("is-invalid")
            inputDiscount.nextElementSibling.innerText = ""
        }
        if (image.value === "") {
            e.preventDefault();
            image.nextElementSibling.innerText = "Debes cargar una imagen"
            image.nextElementSibling.classList.add("is-invalid")
        }
        else {
            
            image.nextElementSibling.classList.remove("is-invalid")
            image.nextElementSibling.innerText = ""
        }

    });
})








/* formulario.addEventListener("submit", function(e){
    let errores=[];
    let nombre= document.querySelector("#name");
    if(nombre.value === ""){
        errores.push("el campo nombre es obligatorio " )
    } else if(nombre.value.length < 5){
        errores.push("el campo nombre debe tener como minimo 5 caracteres")
    } 
    let precio= document.querySelector("#price");
    if(precio.value === ""){
        errores.push("el campo precio es obligatorio ")
    } 
    let descripcion= document.querySelector("#description");
    if(descripcion.value === ""){
        errores.push("el campo descripcion es obligatorio " )
    } else if(descripcion.value.length < 20){
        errores.push("el campo descripcion debe tener como minimo 20 caracteres")
    }
    let image= document.querySelector("#image");
    
    if(image.value === ""){
        errores.push("debe cargar una imagen")
    } 
    
    if(errores.length>0){
            e.preventDefault()
            let ulErrores = document.querySelector(".errores ul");
            errores.forEach(errores =>{
                ulErrores.innerHTML+= "<li>" + errores + "</li>"
            });
    };
});

}); */