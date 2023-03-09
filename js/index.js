const productosArray = [
    {
        id: "mate-01",
        titulo: "Mate Amplificador Fender",
        imagen: "./imagenes/fotos-ventas/mates/musica/amplificadores/fender/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/musica/amplificadores/fender/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2000
    },
    {
        id: "mate-02",
        titulo: "Mate Amplificador Marshall",
        imagen: "./imagenes/fotos-ventas/mates/musica/amplificadores/super-marshall/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/musica/amplificadores/super-marshall/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2500
    },
    {
        id: "mate-03",
        titulo: "Mate Calavera Negra",
        imagen: "./imagenes/fotos-ventas/mates/calaveras/negra/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/calaveras/negra/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-04",
        titulo: "Mate Calavera Day",
        imagen: "./imagenes/fotos-ventas/mates/calaveras/negra-y-dorada/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/calaveras/negra-y-dorada/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2000
    },
    {
        id: "mate-05",
        titulo: "Mate Calavera de plata",
        imagen: "./imagenes/fotos-ventas/mates/calaveras/plata/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/calaveras/plata/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1800
    },
    {
        id: "mate-06",
        titulo: "Mate Camiseta Argentina",
        imagen: "./imagenes/fotos-ventas/mates/deportes/camisetas/argentina/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/deportes/camisetas/argentina/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-07",
        titulo: "Mate Racing Club",
        imagen: "./imagenes/fotos-ventas/mates/deportes/futbol/racing/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/deportes/futbol/racing/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-17",
        titulo: "Mate Independiente",
        imagen: "./imagenes/fotos-ventas/mates/deportes/futbol/rojo/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/deportes/futbol/rojo/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-18",
        titulo: "Mate River Plate",
        imagen: "./imagenes/fotos-ventas/mates/deportes/futbol/river/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/deportes/futbol/river/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-19",
        titulo: "Mate San Lorenzo",
        imagen: "./imagenes/fotos-ventas/mates/deportes/futbol/cuervo/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/deportes/futbol/cuervo/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-08",
        titulo: "Mate Homero Simpson",
        imagen: "./imagenes/fotos-ventas/mates/dibujos-animados/simpson/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/dibujos-animados/simpson/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1700
    },
    {
        id: "mate-09",
        titulo: "Mate Jason Voorhees",
        imagen: "./imagenes/fotos-ventas/mates/terror/jason/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/terror/jason/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2300
    },
    {
        id: "mate-10",
        titulo: "Mate Darth Vader",
        imagen: "./imagenes/fotos-ventas/mates/terror/vader/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/terror/vader/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1600
    },
    {
        id: "mate-11",
        titulo: "Mate Eevee",
        imagen: "./imagenes/fotos-ventas/mates/videojuegos/pokemon/eevee/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/videojuegos/pokemon/eevee/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2000
    },
    {
        id: "mate-12",
        titulo: "Mate Pokebola",
        imagen: "./imagenes/fotos-ventas/mates/videojuegos/pokemon/pokebola/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/videojuegos/pokemon/pokebola/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-13",
        titulo: "Mate Groot",
        imagen: "./imagenes/fotos-ventas/mates/superheroes/groot/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/superheroes/groot/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1700
    },
    {
        id: "mate-14",
        titulo: "Mate Iron Man",
        imagen: "./imagenes/fotos-ventas/mates/superheroes/iron-man/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/superheroes/iron-man/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1700
    },
    {
        id: "mate-15",
        titulo: "Mate Granada Punisher",
        imagen: "./imagenes/fotos-ventas/mates/superheroes/punisher/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/superheroes/punisher/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1700
    },
    {
        id: "mate-16",
        titulo: "Mate Pennywise",
        imagen: "./imagenes/fotos-ventas/mates/terror/it/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/terror/it/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1700
    },
    {
        id: "mate-20",
        titulo: "Mate Piano",
        imagen: "./imagenes/fotos-ventas/mates/musica/piano/mate-01.png",
        imagen2: "./imagenes/fotos-ventas/mates/musica/piano/mate-02.png",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1700
    },

    //TAZAS
    {
        id: "taza-01",
        titulo: "Taza Creeper",
        imagen: "./imagenes/fotos-ventas/tazas/videojuegos/minecraft/creeper/taza-01.jpg",
        imagen2: "./imagenes/fotos-ventas/tazas/videojuegos/minecraft/creeper/taza-02.jpg",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2000
    },
    {
        id: "taza-02",
        titulo: "Taza Scream",
        imagen: "./imagenes/fotos-ventas/tazas/terror/scream/taza-01.png",
        imagen2: "./imagenes/fotos-ventas/tazas/terror/scream/taza-02.png",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2000
    },
    {
        id: "taza-03",
        titulo: "Taza Donuts",
        imagen: "./imagenes/fotos-ventas/tazas/comida/dona/taza-01.png",
        imagen2: "./imagenes/fotos-ventas/tazas/comida/dona/taza-02.png",
        categoria: {
            nombre: "Tazas",
            id: "tazas"
        },
        precio: 2000
    },
    //MACETAS
    {
        id: "maceta-01",
        titulo: "Maceta Emoji enamorado",
        imagen: "./imagenes/fotos-ventas/macetas/emoji/maceta-01.png",
        imagen2: "./imagenes/fotos-ventas/macetas/emoji/maceta-02.png",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 1500
    },
    {
        id: "maceta-01",
        titulo: "Maceta Darth Vader",
        imagen: "./imagenes/fotos-ventas/macetas/vader/maceta-01.png",
        imagen2: "./imagenes/fotos-ventas/macetas/vader/maceta-02.png",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 1500
    },
    //LLAVEROS
    {
        id: "llavero-01",
        titulo: "Llavero Coshita 3D!",
        imagen: "./imagenes/fotos-ventas/llaveros/coshita/llavero-01.png",
        imagen2: "./imagenes/fotos-ventas/llaveros/coshita/llavero-02.png",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 500
    },
    {
        id: "llavero-02",
        titulo: "Llavero Zildjian",
        imagen: "./imagenes/fotos-ventas/llaveros/zildjian/llavero-01.png",
        imagen2: "./imagenes/fotos-ventas/llaveros/zildjian/llavero-01.png",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 500
    },
    {
        id: "llavero-03",
        titulo: "Llavero Chucky",
        imagen: "./imagenes/fotos-ventas/llaveros/chucky/llavero-01.png",
        imagen2: "./imagenes/fotos-ventas/llaveros/chucky/llavero-02.png",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 500
    },
    {
        id: "llavero-04",
        titulo: "Llavero Michael Myers",
        imagen: "./imagenes/fotos-ventas/llaveros/myers/llavero-01.png",
        imagen2: "./imagenes/fotos-ventas/llaveros/myers/llavero-02.png",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 500
    },
    
    

    //VARIADOS
     {
         id: "variado-01",
         titulo: "Lapicero Batman",
         imagen: "./imagenes/fotos-ventas/lapiceros/batman/lapicero-01.png",
         imagen2: "./imagenes/fotos-ventas/lapiceros/batman/lapicero-02.png",
         categoria: {
             nombre: "Variados",
             id: "variados"
         },
         precio: 1600
     },
     {
        id: "variado-02",
        titulo: "Lapicero Eevee",
        imagen: "./imagenes/fotos-ventas/lapiceros/eevee/lapicero-01.png",
        imagen2: "./imagenes/fotos-ventas/lapiceros/eevee/lapicero-02.png",
        categoria: {
            nombre: "Variados",
            id: "variados"
        },
        precio: 1600
    },
     {
        id: "variado-03",
        titulo: "Funko Lio Messi",
        imagen: "./imagenes/fotos-ventas/funkos/futbol/messi/funko-01.png",
        imagen2: "./imagenes/fotos-ventas/funkos/futbol/messi/funko-02.png",
        categoria: {
            nombre: "Variados",
            id: "variados"
        },
        precio: 1600
    }
];

//FUNCION aleatorizar array (los productos)

productosArray.sort((a,b) => 0.5 - Math.random());


//LIMITAR EL ARRAY DE PRODUCTO A 3

const tresProductos = productosArray.slice(0,3);
console.log(tresProductos);


//MOSTRAR EN PANTALLA LOS 3 PRODUCTOS ALEATORIOS
const contenedorTresProductos = document.querySelector(".products-container__just-products");
contenedorTresProductos.innerHTML = "";

tresProductos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("products-container__producto");
    div.innerHTML = `
        <a href="producto.html"><img id="${producto.id}" class="products-container__imagen" src="${producto.imagen}"
        alt="${producto.id}"></a>
        <div class="products-container__detalles">
            <h3 class="products-container__titulo">${producto.titulo}</h3>
        </div>`

    contenedorTresProductos.append(div);
})



function agregarAPagina(e){
    const idBoton = e.currentTarget.id;
    const productoFiltrado = productosArray.find(producto => producto.id === idBoton);
    
    localStorage.setItem("producto-en-pagina", JSON.stringify(productoFiltrado));

};
function actualizarImagen(){
    const imagenes = document.querySelectorAll('img');

    imagenes.forEach(imagen => {
    imagen.addEventListener("click", agregarAPagina);
    
});
}
actualizarImagen();