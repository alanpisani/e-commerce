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
    }
];

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