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

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

addToCartBtn.addEventListener('click', ()=>{

    let lastValue = parseInt(cartNotification.innerText);
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = "block";
});

//Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");

cartIconBtn.addEventListener('click', ()=>{

    cartModal.style.display = "block";
})


