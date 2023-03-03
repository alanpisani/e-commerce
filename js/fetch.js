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
        imagen2: "./imagenes/fotos-ventas/mates/amplificadores/fender/mate-02.jpg",
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
        imagen2: "./imagenes/fotos-ventas/mates/amplificadores/super-marshall/mate-02.jpg",
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
        imagen2: "./imagenes/fotos-ventas/mates/calaveras/negra/mate-02.jpg",
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
        imagen2: "./imagenes/fotos-ventas/mates/calaveras/negra-y-dorada/mate-02.jpg",
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
        imagen2: "./imagenes/fotos-ventas/mates/deportes/futbol/racing/mate-02.jpg",
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
        imagen2: "./imagenes/fotos-ventas/mates/dibujos-animados/simpson/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1700
    },
    {
        id: "mate-09",
        titulo: "Mate Jason Voorhees",
        imagen: "./imagenes/fotos-ventas/mates/terror/jason/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/terror/jason/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 2300
    },
    {
        id: "mate-10",
        titulo: "Mate Darth Vader",
        imagen: "./imagenes/fotos-ventas/mates/terror/vader/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/terror/vader/mate-02.jpg",
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
        imagen2: "./imagenes/fotos-ventas/mates/videojuegos/pokemon/eevee/mate-02.jpg",
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
        imagen2: "./imagenes/fotos-ventas/mates/videojuegos/pokemon/pokebola/mate-02.jpg",
        categoria: {
            nombre: "Mates",
            id: "mates"
        },
        precio: 1500
    },
    {
        id: "mate-13",
        titulo: "Mate Groot",
        imagen: "./imagenes/fotos-ventas/mates/superheroes/groot/mate-01.jpg",
        imagen2: "./imagenes/fotos-ventas/mates/superheroes/groot/mate-02.jpg",
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
    //MACETAS
    {
        id: "maceta-01",
        titulo: "Maceta Emoji enamorado",
        imagen: "./imagenes/fotos-ventas/macetas/emoji/maceta-01.jpg",
        imagen2: "./imagenes/fotos-ventas/macetas/emoji/maceta-02.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 1500
    }
    //LAPICEROS
    // {
    //     id: "lapicero-01",
    //     titulo: "Lapicero Batman",
    //     imagen: "./imagenes/fotos-ventas/lapiceros/batman/lapicero-01.jpg",
    //     categoria: {
    //         nombre: "Lapiceros",
    //         id: "lapiceros"
    //     },
    //     precio: 1600
    // },
    
];

const contenedorProductos = document.querySelector('.principal-products__products-container');
const botonesCategoria = document.querySelectorAll('.aside-nav__category-button');
const tituloCategoria = document.querySelector('#product-title');
let botonesAgregar = document.querySelectorAll('.products-container__all-products-btn');
const numerito = document.querySelector('#numerito');


function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add('principal-products__product-container');
        div.innerHTML = `
            <a href="producto.html"><img id="${producto.id}" class="principal-products__product-image" src="${producto.imagen}" alt="${producto.titulo}"></a>
            <div class="principal-products__product-details">
                <h3 class="principal-products__product-title">${producto.titulo}</h3>
                <p class="principal-products__price">$${producto.precio}</p>
                <button class="products-container__all-products-btn" id = "${producto.id}">Añadir al carrito</button>
            </div>`;
            
        contenedorProductos.append(div);
    });
    actualizarFuncionesAgregar();
    //console.log(botonesAgregar);
};

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
        }
        else{
            tituloCategoria.innerText = "todos los productos";
            cargarProductos(productosArray);
        };

        

    } );


});

function actualizarFuncionesAgregar (){
    botonesAgregar = document.querySelectorAll('.products-container__all-products-btn');
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

let productosEnCarrito;

const productosEnCarritoLocalStorage = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLocalStorage){
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        //productoAgregado.cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
    actualizarNumerito();
    //console.log(productosEnCarrito);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
};

//PROBANDO SI TOMA PRODUCTO AL HACERLE CLICK A LA IMAGEN


//let productoEnPagina;

function agregarAPagina(e){
    const idBoton = e.currentTarget.id;
    const productoFiltrado = productosArray.find(producto => producto.id === idBoton);
    
    localStorage.setItem("producto-en-pagina", JSON.stringify(productoFiltrado));
};

const imagenes = document.querySelectorAll('img');

imagenes.forEach(imagen => {
    imagen.addEventListener("click", agregarAPagina);
});



