window.addEventListener("load",function(){
    let formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", function(e){
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
});
