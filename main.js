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


//Mostrar el modal de las imagenes cuadno hago click en la imagen principal

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', ()=>{

  imagesModal.style.display = 'grid';

});

closeModalBtn.addEventListener('click', ()=>{

  imagesModal.style.display = 'none';

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
  priceModal.innerHTML = `$2000 x ${lastValue} <span>$${
    lastValue * 2000
  }</span>`;
};

function changeNextImage(imgContainer) {
  if (imgIndex == 5){
    imgIndex = 1;
  }else{
    imgIndex++
  };
  imgContainer.style.backgroundImage = `url('../imagenes/mate-calavera-negra/calavera-${imgIndex}.jfif')`;
  
};

function changePreviousImage(imgContainer){
  if (imgIndex == 1){
    imgIndex = 5
  }else{
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('../imagenes/mate-calavera-negra/calavera-${imgIndex}.jfif')`;
}
