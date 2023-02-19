//Mostrar el navbar version celular clickeando la hamburguesa

const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');
const body = document.querySelector('body');
let cont = 1;


//modalNavbar.style.display = 'none';

hamburgerMenu.addEventListener('click', ()=>{
  console.log('abrir modal');
  modalNavbar.style.display = 'block';
  body.style.overflow = 'hidden';  //ocultar scroll cuando se abre el navmodal

});

closeModalNavbar.addEventListener('click', ()=>{
  modalNavbar.style.display = 'none';
  body.style.overflow = 'visible';

});





