const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");
const body =  document.querySelector('body');
const navIndex = document.querySelector('#navIndex');


openMenu.addEventListener("click", () => {
    if(aside){
        aside.classList.add("aside-visible-mobile");
    }
    if (navIndex){
        navIndex.style.display = "block";
    }
    
    
});

closeMenu.addEventListener("click", () => {
    if (aside){
        aside.classList.remove("aside-visible-mobile");
        
    }
    if (navIndex){
        navIndex.style.display = "none";
    }
    
});

if(botonesCategoria){
    botonesCategoria.forEach(boton => boton.addEventListener("click", () =>{

    aside.classList.remove("aside-visible-mobile");

}))

};