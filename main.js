//cambio de cantidad de articulos ingresado por el usuario

let minusBtn = document.querySelector(".input__minus");
let userInput = document.querySelector(".input__number");
let plusBtn = document.querySelector(".input__plus");

let userInputNumber = 0;

plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

//Agregar el total de productos al carrito cuando se presiona el boton AÑADIR AL CARRITO

const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
  drawProductInModal();
});

//Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector(".cart-modal__checkout-container");

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");

  if (lastValue == 0) {
    productContainer.innerHTML =
      '<p class="cart-empty">Tu carrito está vacío</p>';
  }else{
    drawProductInModal();
  };
});

//Borrar el contenido del carrito

function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");
  deleteProductBtn.addEventListener("click", () => {
    productContainer.innerHTML =
      '<p class="cart-empty">Tu carrito está vacío</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
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

    //console.log(event.target.id);
    imageContainer.style.backgroundImage = `url('./imagenes/mate-calavera-negra/calavera-${event.target.id}.jfif')`;

  });

});


//Cambiar las imagenes principales desde los thumnails EN EL MODAL

let modalThumbnails = document.querySelectorAll ('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalThumbnails = [...modalThumbnails]; //Transforma nodeList en arrays

modalThumbnails.forEach(modalThumbnail =>{

  modalThumbnail.addEventListener('click', event=>{

    //console.log(event.target.id.slice(-1));
    modalImageContainer.style.backgroundImage = `url('./imagenes/mate-calavera-negra/calavera-${event.target.id.slice(-1)}.jfif')`;

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


//Mostrar el navbar version celular clickeando la hamburguesa

const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

//modalNavbar.style.display = 'none';

hamburgerMenu.addEventListener('click', ()=>{
  console.log('abrir modal');
  modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
  modalNavbar.style.display = 'none';
});


//FUNCIONES

function drawProductInModal() {
  productContainer.innerHTML = `
    <div class="cart-modal__details-container">
      <img class="cart-modal__image" src="imagenes/mate-calavera-negra/calavera-1.jfif" alt="cart product thumnail">
      <div>
        <p class="cart-modal__product">Mate calavera negra</p>
        <p class="cart-modal__price">$2000 x 3 <span>$6000</span></p>
      </div>
      <img class="cart-modal__delete" src="imagenes/delete-icon.svg" alt="delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`;
  deleteProduct();
  let priceModal = document.querySelector(".cart-modal__price");
  priceModal.innerHTML = `$2000 x ${lastValue} <span>$${lastValue * 2000}</span>`;
};

function changeNextImage(imgContainer) {
  if (imgIndex == 4){
    imgIndex = 1;
  }else{
    imgIndex++
  };
  imgContainer.style.backgroundImage = `url('./imagenes/mate-calavera-negra/calavera-${imgIndex}.jfif')`;
  
};

function changePreviousImage(imgContainer){
  if (imgIndex == 1){
    imgIndex = 4;
  }else{
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('./imagenes/mate-calavera-negra/calavera-${imgIndex}.jfif')`;
};
