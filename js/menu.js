const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");
const body =  document.querySelector('body');

openMenu.addEventListener("click", () => {

    aside.classList.add("aside-visible-mobile");
    body.classList.add("scrollhidden");
});

closeMenu.addEventListener("click", () => {

    aside.classList.remove("aside-visible-mobile");
    body.classList.remove("scrollhidden");
});

botonesCategoria.forEach(boton => boton.addEventListener("click", () =>{

    aside.classList.remove("aside-visible-mobile");

}));