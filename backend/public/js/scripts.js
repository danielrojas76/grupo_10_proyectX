function productosEnElCarrito() {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0
  }
window.addEventListener("load", function () {
  
    let botonComprar = document.querySelector(".agregar_carrito")
    let cartNumber = document.querySelector(".cart-number");
    cartNumber.innerText = productosEnElCarrito();
  
    botonComprar.addEventListener("click", (e) =>{
        //console.log(e.target.dataset.id)
        // Hay carrito en local Storage
        if(localStorage.carrito){
          let carrito = JSON.parse(localStorage.carrito);
          
          let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id)
          if(index != -1){
            carrito[index].quantity++ 
          } else {
            carrito.push({id:e.target.dataset.id, quantity: 1})
          }
          localStorage.setItem('carrito',JSON.stringify(carrito))
          // si mi producto esta en el carrito le sumo 1
          // sino lo agrego con push
        } else {
          localStorage.setItem('carrito', JSON.stringify([{id:e.target.dataset.id, quantity: 1}]))
        }
        //toastr.success('se agregó este producto al carrito');
        cartNumber.innerText = productosEnElCarrito();
      })
    }) 
  