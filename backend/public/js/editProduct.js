window.addEventListener("load",function(){
    let formulario = document.querySelector("#formularioEdit");
    formulario.addEventListener("submit", function(e){
        let errores=[];
        let nombre= document.querySelector("#name");
        if(nombre.value===""){
            errores.push("el campo es obligatorio")
        } else if(nombre.value.length < 5){
            errores.push("el campo debe tener como minimo 5 caracteres")
        }
        let precio= document.querySelector("#price");
        if(precio.value===""){
            errores.push("el campo es obligatorio")
        } 
        let descripcion= document.querySelector("#description");
        if(descripcion.value===""){
            errores.push("el campo es obligatorio")
        } else if(descripcion.value.length < 20){
            errores.push("el campo debe tener como minimo 20 caracteres")
        }

        if(errores.length>0){
                e.preventDefault()
                let ulErrores = document.querySelector(".errores ul");
                errores.forEach(error =>{
                    ulErrores.innerHTML+= "<li>${error}</li>"
                });
        };
    });
});