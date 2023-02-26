const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {

    aside.classList.add("aside-visible-mobile");
});

closeMenu.addEventListener("click", () => {

    aside.classList.remove("aside-visible-mobile");
});

botonesCategoria.forEach(boton => boton.addEventListener("click", () =>{

    aside.classList.remove("aside-visible-mobile");

}));