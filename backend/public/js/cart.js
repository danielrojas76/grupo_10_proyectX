function removeItem(index) {
    let carrito = JSON.parse(localStorage.carrito);
    if (carrito.length > 1) {
      carrito.splice(index, 1);
      products.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      document.getElementById(`row${index}`).remove();
    } else {
      localStorage.removeItem("carrito");
      products = [];
      setCarritoVacio();
    }
  
    let cartNumber = document.querySelector(".cart-number");
    cartNumber.innerText = productsEnElCarrito();
  
    document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(products)}`;
  
    //toastr.success("Se borro el item del carrito");
  }

function setCarritoVacio() {
    cartRows.innerHTML = `
      <tr>     
          <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes products en el carrito</div></td>
      </tr>            
      `;
}
function vaciarCarrito() {
    localStorage.removeItem("carrito");
}

function calcularTotal(products) {
    return products.reduce(
        (acum, product) => (acum += product.price * product.quantity),
        0
    );
}
let cartRows = document.querySelector('.product')
let products = [];




    if (localStorage.carrito) {
        let carrito = JSON.parse(localStorage.carrito);
        //console.log(carrito)
        carrito.forEach((item, index) => {
            //console.log(item)
            fetch(`/api/products/${item.id}`)
                .then(res => res.json())
                .then((product) => {
                    if (product) {
                        //console.log(product)
                        cartRows.innerHTML += `
                    <div class="box-item media-Product" id="row${index}">
                    <img src="${product.data.urlImage}"
                    alt="Producto 1">
                    <div class="box-item-details">
                    <h3>${product.data.name}</h3>
                    </div>
                    <div class="box-item-details">
                    <div class="quantitybtn">
                    <span class="quantity-value">Cantidad: ${item.quantity}</span>
                    </div>
                    </div>
                    <div class="box-item-details">
                    <p>$ ${parseFloat(product.data.price * item.quantity, 2).toFixed(2)}</p>
                    </div>
                    <div>
                    <button class="quantity-btn-danger" onclick=removeItem(${index})><i class="fa-solid fa-trash"></i></button>
                    </div>
                    </div>
                    `;
                        products.push({
                            productId: product.data.id,
                            name: product.data.name,
                            price: product.data.price,
                            quantity: item.quantity,
                        })
                    } else {
                        carrito.splice(index, 1)
                        localStorage.setItem("carrito", JSON.stringify(carrito))
                    }
                })
                .then(() => {
                    (document.querySelector(".totalAmount").innerHTML = `$ ${calcularTotal(products)}`)
                })
        });
    }else {
        setCarritoVacio();
      }


let checkoutCart = document.querySelector("#checkoutCart");

checkoutCart.onsubmit = (e) => {
    e.preventDefault();
    const formData = {
        orderItems: products,
        paymentMethod: checkoutCart.paymentMethod.value,
        shippingMethod: checkoutCart.shippingMethod.value,
        total: calcularTotal(products),
    };
    fetch('/api/products/checkout', {
        method:"post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then((r)=>r.json())
        .then((res)=>{
            console.log(res)
            if(res.ok){
                vaciarCarrito()
                location.href=`/order/${res.order.id}?creado=true`;
            } 
        })
        .catch((error) => console.log(error));
    console.log(formData)
}
