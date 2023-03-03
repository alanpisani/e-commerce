//TRAER PRODUCTO DEL LOCALSTORAGE

let productoEnPaginaLS= localStorage.getItem("producto-en-pagina");
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
let productoEnPagina;
let productosEnCarrito;

if (productoEnPaginaLS){
  productoEnPagina = JSON.parse(productoEnPaginaLS);
}else{
  productoEnPagina = [];
}

if (productosEnCarritoLS){
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
}else{
  productosEnCarrito = [];
}

const contenedorProducto = document.querySelector('#contenido');
contenedorProducto.innerHTML= "";
const section = document.createElement("section");
section.classList.add("content");
section.innerHTML=`
  <style>
    .gallery__image-container{
      background-image:url('${productoEnPagina.imagen}');
    }
  </style>
  <article class="gallery">
  <div class="gallery__image-container">
      <img src="imagenes/previous-icon.svg" alt="previous" class="gallery__previous">
      <img src="imagenes/next-icon.svg" alt="next" class="gallery__next">
  </div>
  <div class="gallery__thumnails">
      <img id="1" class="gallery__thumnail" src=${productoEnPagina.imagen}
          alt="thumnail">
      <img id="2" class="gallery__thumnail" src=${productoEnPagina.imagen2}
          alt="thumnail">
  </div>
  </article>
  <article class="details">
  <h2 class="details__title">${productoEnPagina.titulo}</h2>
  <p class="details__description">Excelente producto hecho en impresion 3D de material PLA, pintado a mano y
      terminado con laca para su mayor protección</p>
  <div class="details__prices">
      <p class="details__now">${productoEnPagina.precio} <span class="details__discount">20%</span></p>
      <p class="details__before">$2500</p>
  </div>
  <div class="details__product-quantity">
      <div class="input">
          <img class="input__minus" src="imagenes/minus-icon.svg" alt="minus icon">
          <input class="input__number" type="text" value="0">
          <img class="input__plus" src="imagenes/plus-icon.svg" alt="plus icon">
      </div>
      <button class="details__button"><img class="cart-icon" src="imagenes/cart-icon-white.svg" alt=""> Añadir al carrito</button>
  </div>
  </article>`;
  
  contenedorProducto.append(section);

  //PLASMAR PRODUCTO AL GALLERY MODAL

  const galeriaModal = document.querySelector('#galeria-modal');
  galeriaModal.innerHTML= "";
  const article = document.createElement("article");
  article.classList.add("modal-gallery");

  article.innerHTML= `
    <style>
      .modal-gallery__image-container{
        background-image:url('${productoEnPagina.imagen}');
      }
    </style>
    <div class="modal-gallery__close-container">
      <img src="imagenes/icon-close.svg" alt="icon close" class="modal-gallery__close">
    </div>
    <div class="modal-gallery__image-container">
      <img src="imagenes/previous-icon.svg" alt="previous" class="modal-gallery__previous">
      <img src="imagenes/next-icon.svg" alt="next" class="modal-gallery__next">
    </div>
    <div class="modal-gallery__thumnails">
      <img id="m1" class="modal-gallery__thumnail" src="${productoEnPagina.imagen}"
          alt="thumnail">
      <img id="m2" class="modal-gallery__thumnail" src="${productoEnPagina.imagen2}"
          alt="thumnail">
    </div>`;
  galeriaModal.append(article);


//cambio de cantidad de articulos ingresado por el usuario

  let minusBtn = document.querySelector(".input__minus");
  let userInput = document.querySelector(".input__number");
  let plusBtn = document.querySelector(".input__plus");

  let userInputNumber = 0;
  productoEnPagina.cantidad = 0;

  plusBtn.addEventListener("click", () => {
    userInputNumber++;
    productoEnPagina.cantidad++;
    userInput.value = userInputNumber;
    
  });

  minusBtn.addEventListener("click", () => {
    userInputNumber--;
    productoEnPagina.cantidad--;
    if (userInputNumber <= 0 || productoEnPagina.cantidad <= 0) {
      userInputNumber = 0;
      productoEnPagina.cantidad = 0;
    }
    userInput.value = userInputNumber;
    
  });





//Agregar el total de productos al carrito cuando se presiona el boton AÑADIR AL CARRITO

const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputNumber;
  productoEnPagina.cantidad = lastValue;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
  
  //console.log(productosEnCarrito);

  if (productosEnCarrito.includes(productoEnPagina)){
      productosEnCarrito.remove(productoEnPagina);
      productosEnCarrito.push(productoEnPagina);
  }else{
    productosEnCarrito.push(productoEnPagina);
  }
  drawProductInModal();
});

//Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector(".cart-modal__checkout-container");

cartIconBtn.addEventListener("click", () => {
  divCarrito.classList.toggle("show");
  
  if (lastValue == 0) {
    divCarrito.innerHTML =`
    <p class="cart-modal__title">Carrito</p>
    <div class="cart-modal__checkout-container">
        <p class="cart-empty">Tu carrito está vacío</p>
    </div>`;
  }else{
    drawProductInModal();
  };
});

//Borrar el contenido del carrito

function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");
  deleteProductBtn.addEventListener("click", () => {
    divCarrito.innerHTML =`
    <p class="cart-modal__title">Carrito</p>
    <div class="cart-modal__checkout-container">
        <p class="cart-empty">Tu carrito está vacío</p>
    </div>`;
    lastValue = 0;
    productoEnPagina.cantidad = lastValue;
    cartNotification.innerText = lastValue;
    //localStorage.removeItem('productos-en-carrito', productoEnPagina);
    productosEnCarrito.pop();
    console.log(productosEnCarrito);
  });
}

//Cambiar imágenes cuando se presione los botones flecha

const imageContainer = document.querySelector(".gallery__image-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () => {
  changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener('click', ()=>{
  changePreviousImage(imageContainer);
});


//Mostrar el modal de las imagenes cuando hago click en la imagen principal

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

  imageContainer.addEventListener('click', ()=>{
    if(window.innerWidth >= 1115){
        imagesModal.style.display = 'grid';
    }
    
});



closeModalBtn.addEventListener('click', ()=>{

  imagesModal.style.display = 'none';

});

//Cambiar las imagenes principales desde los thumnails

let thumbnails = document.querySelectorAll ('.gallery__thumnail');
thumbnails = [...thumbnails]; //Transforma nodeList en arrays

thumbnails.forEach(thumbnail =>{

  thumbnail.addEventListener('click', event=>{

    let imagenId = event.target.id;
    //console.log(imagenId);
    
    if (imagenId == 1){

      imageContainer.style.backgroundImage = `url(${productoEnPagina.imagen})`;

    }else {

      imageContainer.style.backgroundImage = `url('${productoEnPagina.imagen2}`;

    };
    

  });

});


//Cambiar las imagenes principales desde los thumnails EN EL MODAL

let modalThumbnails = document.querySelectorAll ('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalThumbnails = [...modalThumbnails]; //Transforma nodeList en arrays

modalThumbnails.forEach(modalThumbnail =>{

  modalThumbnail.addEventListener('click', event=>{

    let imagenId = event.target.id;
    //console.log(imagenId);
    
    if (imagenId == "m1"){

      modalImageContainer.style.backgroundImage = `url(${productoEnPagina.imagen})`;

    }else {

      modalImageContainer.style.backgroundImage = `url('${productoEnPagina.imagen2}`;

    };

  });

});


//Cambiar imagen principal de modal desde flechas

const previousModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');

previousModalBtn.addEventListener('click', ()=>{

  changePreviousImage(modalImageContainer);

});

nextModalBtn.addEventListener('click', ()=>{

  changeNextImage(modalImageContainer);

});



//FUNCIONES

//PLASMAR PRODUCTO AL CART MODAL


const carritoModal = document.querySelector('#carrito-modal');
carritoModal.innerHTML= "";
const divCarrito = document.createElement("div");
divCarrito.classList.add("cart-modal");

  function drawProductInModal() {
    divCarrito.innerHTML=`
    <p class="cart-modal__title">Carrito</p>
    <div class="cart-modal__checkout-container">
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="${productoEnPagina.imagen}" alt="cart product thumnail">
            <div>
                <p class="cart-modal__product">${productoEnPagina.titulo}</p>
                <p class="cart-modal__price">$${productoEnPagina.precio}x ${productoEnPagina.cantidad} <span>$6000</span></p>
            </div>
            <img class="cart-modal__delete" src="imagenes/delete-icon.svg" alt="delete">
        </div>
        <a href="carrito.html" id="checkout" class="cart-modal__checkout">Checkout</a>
    </div>`;
    carritoModal.append(divCarrito);
    deleteProduct();
    enviarAlCarrito()

    let priceModal = document.querySelector(".cart-modal__price");
    priceModal.innerHTML = `$${productoEnPagina.precio} x ${lastValue} <span>$${lastValue * productoEnPagina.precio}</span>`;
  };

function changeNextImage(imgContainer) {
  if (imgIndex == 2){
    imgIndex = 1;
    imgContainer.style.backgroundImage = `url('${productoEnPagina.imagen2}`;
  }else{
    imgIndex++;
    imgContainer.style.backgroundImage = `url('${productoEnPagina.imagen}`;
  };
  
  
};

function changePreviousImage(imgContainer){
  if (imgIndex == 1){
    imgIndex = 2;
    imgContainer.style.backgroundImage = `url('${productoEnPagina.imagen}`;
  }else{
    imgIndex--;
    imgContainer.style.backgroundImage = `url('${productoEnPagina.imagen2}`;
  }
};

//ENVIAR PRODUCTO AL LOCALSTORAGE



function enviarAlCarrito(){
  const checkout = document.querySelector('#checkout');
  checkout.addEventListener('click', () =>{
    
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    //console.log(productosEnCarrito);
    
  });

}









