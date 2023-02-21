// fetch('https://api.escuelajs.co/api/v1/products')
// .then(res => res.json())
// .then (data => console.log(data))

// let shoppingCartArray = [];
// let total = 0;

// const api = 'https://api.escuelajs.co/api/v1/products'

// async function fetchie(parameter){

// let res = await fetch(parameter);
// let data = await res.json();

// let productsArray = data.slice(1,5);

// console.log(productsArray);

// productsArray.forEach(product => {

//     console.log(product);
    
// });

// }

// fetchie(api);


//PRODUCTOS

const productosArray = [
    {
        id: "mate-01",
        titulo: "Mate Amplificador Fender",
        imagen: "./imagenes/fotos-ventas/mates/amplificadores/fender/mate-01.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2000
    },
    {
        id: "mate-02",
        titulo: "Mate Amplificador Marshall",
        imagen: "./imagenes/fotos-ventas/mates/amplificadores/super-marshall/mate-01.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2500
    },
    {
        id: "mate-03",
        titulo: "Mate Calavera Negra",
        imagen: "./imagenes/fotos-ventas/mates/calaveras/negra/mate-01.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-04",
        titulo: "Mate Calavera Especial",
        imagen: "./imagenes/fotos-ventas/mates/calaveras/negra-y-dorada/mate-01.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1800
    },
    {
        id: "mate-05",
        titulo: "Mate Calavera de plata",
        imagen: "./imagenes/fotos-ventas/mates/calaveras/plata/mate-01.jpg",
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
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-08",
        titulo: "Mate Homero Simpson",
        imagen: "./imagenes/fotos-ventas/mates/dibujos-animados/simpson/mate-01.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1600
    },
    {
        id: "mate-09",
        titulo: "Mate Jason Voorhees",
        imagen: "./imagenes/fotos-ventas/mates/terror/jason/mate-01.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2000
    },
    {
        id: "mate-10",
        titulo: "Mate Darth Vader",
        imagen: "./imagenes/fotos-ventas/mates/terror/vader/mate-01.jpg",
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
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2000
    },
    {
        id: "mate-12",
        titulo: "Mate Pokebola",
        imagen: "./imagenes/fotos-ventas/mates/videojuegos/pokemon/pokebola/mate-01.jpg",
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
        imagen: "./imagenes/fotos-ventas/macetas/emoji/maceta-01.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 1500
    },
    //LAPICEROS
    {
        id: "lapicero-01",
        titulo: "Lapicero Batman",
        imagen: "./imagenes/fotos-ventas/lapiceros/batman/lapicero-01.jpg",
        categoria: {
            nombre: "Lapiceros",
            id: "lapiceros"
        },
        precio: 1600
    },
    //FUNKOS
    {
        id: "funko-09",
        titulo: "Funko Lio Messi",
        imagen: "./imagenes/fotos-ventas/funkos/futbol/messi/funko-01.jpg",
        categoria: {
            nombre: "Funkos",
            id: "funkos"
        },
        precio: 2000
    }
];

const contenedorProductos = document.querySelector('.principal-products__products-container');
const botonesCategoria = document.querySelectorAll('.aside-nav__category-button');
const tituloCategoria = document.querySelector('#product-title');

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add('principal-products__product-container');
        div.innerHTML = `
        <img class="principal-products__product-image" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="principal-products__product-details">
            <h3 class="principal-products__product-title">${producto.titulo}</h3>
            <p class="principal-products__price">$${producto.precio}</p>
            <button class="products-container__all-products-btn" id = "${producto.id}">Añadir al carrito</button>
        </div>`;
        contenedorProductos.append(div);
    });
}
cargarProductos(productosArray);

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e)=>{

        botonesCategoria.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');
        if (e.currentTarget.id != "all"){
            const productoCategoria = productosArray.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloCategoria.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productosArray.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloCategoria.innerText = "todos los productos";
            cargarProductos(productosArray);
        };

        

    } );


})