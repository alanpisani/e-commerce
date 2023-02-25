let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".principal-cart-products__delete");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");

function cargarProductoCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
        
            const div = document.createElement("div");
            div.classList.add("principal-cart-products__cart-product");
            div.innerHTML = `
                <img class="principal-cart-products__cart-image" src=${producto.imagen} alt=${producto.titulo}>
                <div class="principal-cart-products__cart-product-title">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="principal-cart-products__cart-product-quantity">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="principal-cart-products__cart-product-price">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="principal-cart-products__cart-product-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button id="${producto.id}" class="principal-cart-products__delete"><i class="bi bi-trash3"></i></button>
                `;
    
                contenedorCarritoProductos.append(div);
            
        });
        
    
    
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
    };
    actualizarBotonesEliminar();
    actualizarTotal();

};
cargarProductoCarrito();



function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll('.principal-cart-products__delete');
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
};

function eliminarDelCarrito(e){

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index,1);
    cargarProductoCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

};

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductoCarrito();

};

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    contenedorTotal.innerText = `$${totalCalculado}`;
};



