document.addEventListener("DOMContentLoaded", () =>{
    cargarProductos()
})
const nombre = document.getElementById("nombre")
const precioMin = document.getElementById("precioMin")
const precioMax = document.getElementById("precioMax")
const opcion = document.getElementById("opcion")
const section = document.getElementById("productos")
const buscar = document.getElementById("Buscar")
const carrito = document.getElementById("carrito")
const equis = document.getElementById("equis")
const factura = document.getElementById("factura")
const factura2 = document.getElementById("factura2")

let products = [{
    id : 1,
    nombre : "Smartphone",
    precio: 1000000,
    categoría:"Tecnología"
},{
    id : 2,
    nombre : "TV",
    precio: 300000, 
    categoría:"Tecnología"
},{
    id : 3,
    nombre : "Videojuego PS5",
    precio: 300000, 
    categoría:"Tecnología"
},{
    id : 4,
    nombre : "Videojuego PS4",
    precio: 150000,
    categoría:"Tecnología"
},{
    id : 5,
    nombre : "Chanclas",
    precio: 20000,
    categoría:"Calzado"
},{
    id : 6,
    nombre : "Tennis",
    precio: 80000,
    categoría:"Calzado"
},{
    id : 7,
    nombre : "Nike AF1",
    precio: 120000,
    categoría:"Calzado"
},{
    id : 8,
    nombre : "Adidas Predator",
    precio: 190000,
    categoría:"Calzado"
},{
    id : 9,
    nombre : "Balón de basket",
    precio: 125000,
    categoría:"Deportes"
},{
    id : 10,
    nombre : "Balón de fútbol",
    precio: 70000,
    categoría:"Deportes"
},{
    id : 11,
    nombre : "Pelota de tennis",
    precio: 34000,
    categoría:"Deportes"
},{
    id : 12,
    nombre : "Raqueta tenis",
    precio: 195000,
    categoría:"Deportes"
},{
    id : 13,
    nombre : "Sueter",
    precio: 40000,
    categoría:"Moda"
},{
    id : 14,
    nombre : "Camisa",
    precio: 50000,
    categoría:"Moda"
},{
    id : 15,
    nombre : "Camisa tipo polo",
    precio: 76000,
    categoría:"Moda"
},{
    id : 16,
    nombre : "Pantalón levi's",
    precio: 350000,
    categoría:"Moda"
}]

carrito.addEventListener("click", () => {
    factura.style.display = "flex"
})
equis.addEventListener("click", () => {
    factura.style.display = "none"
})
buscar.addEventListener("click", () => {
    let productosFiltrados = products;

    if (opcion.value !== "-") {
        productosFiltrados = productosFiltrados.filter(producto => producto.categoría.toLowerCase() === opcion.value.toLowerCase());
    }

    if (nombre.value !== "") {
        productosFiltrados = productosFiltrados.filter(producto => producto.nombre.toLowerCase().includes(nombre.value.toLowerCase()));
    }

    if (precioMin.value !== "" || precioMax.value !== "") {
        const min = precioMin.value !== "" ? parseInt(precioMin.value) : 0;
        const max = precioMax.value !== "" ? parseInt(precioMax.value) : Number.MAX_SAFE_INTEGER;
        productosFiltrados = productosFiltrados.filter(producto => producto.precio >= min && producto.precio <= max);
    }
    setTimeout(()=>{
        section.innerHTML = "";

    productosFiltrados.forEach(producto => {
        section.innerHTML += `<article id="P${producto.id}">
                <h2>${producto.nombre}</h2>
                <span>${producto.precio}</span>
                <button class="btn">Agregar al carrito</button>
            </article>`;
    });
    },100)
})

function cargarProductos() {
    section.innerHTML = "";
    
    products.forEach((producto, i) =>{
        section.innerHTML += `<article id="P${producto.id}">
                <h2>${producto.nombre}</h2>
                <span>${producto.precio}</span>
                <button class="btn">Agregar al carrito</button>
            </article>`
}) 
}
setTimeout(()=>{
    let btnAggCarrito = Array.from(document.getElementsByClassName("btn"))
    btnAggCarrito.forEach((boton,i)=>{
        boton.addEventListener("click", () => {

            factura2.innerHTML = ""

            factura2.innerHTML += `<article id="P${products[i].id}">
                    <button class="btnEliminar" id="btnEliminar${products[i].id}">X</button>
                    <h2>${products[i].nombre}</h2>
                    <span>${products[i].precio}</span>
                </article>`
    
                setTimeout(()=>{
                    let btnEliminar = document.getElementById(`btnEliminar${products[i].id}`)
                    btnEliminar.addEventListener("click", () =>{
                        document.getElementById(`P${products[i].id}`).remove()
                    })
                },1000)
        },1000)
    })

},1000)








//PRUEBA DE METODO FALLIDA
/* function FiltroXCategoria(){
    const productosFiltrados = products.filter(producto => producto.categoría.toLowerCase() === opcion.value.toLowerCase());

    section.innerHTML = "";

    productosFiltrados.forEach(producto => {
        section.innerHTML += `<article id="P${producto.id}">
                <h2>${producto.nombre}</h2>
                <span>${producto.precio}</span>
                <button class="btn">Agregar al carrito</button>
            </article>`;
    });
}
function FiltroXNombre(){
    const productosFiltrados = products.filter(producto => producto.nombre.toLowerCase().includes(nombre.value.toLowerCase()) );
    section.innerHTML = "";

    productosFiltrados.forEach(producto => {
        section.innerHTML += `<article id="P${producto.id}">
                <h2>${producto.nombre}</h2>
                <span>${producto.precio}</span>
                <button class="btn">Agregar al carrito</button>
            </article>`;
    });
}
function FiltroXPrecio(){
    if(precioMin != "" && precioMax != ""){
        const productosFiltrados = products.filter(producto => producto.precio >= precioMin.value && producto.precio <= precioMax.value);
    }else if(precioMin == "" && precioMax != ""){
        precioMin.value = 0
        const productosFiltrados = products.filter(producto => producto.precio >= precioMin.value && producto.precio <= precioMax.value);
    } else{
        precioMax.value = 999999999999999999999 
        const productosFiltrados = products.filter(producto => producto.precio >= precioMin.value && producto.precio <= precioMax.value);
    }

    section.innerHTML = "";

    productosFiltrados.forEach(producto => {
        section.innerHTML += `<article id="P${producto.id}">
                <h2>${producto.nombre}</h2>
                <span>${producto.precio}</span>
                <button class="btn">Agregar al carrito</button>
            </article>`;
    });
} */
