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

let tecno = ["Smartphone", "TV", "Videojuego PS5", "Videojuego PS4"]
let precioTecno = [1000000, 2000000, 300000, 150000]
let calzado = ["Chanclas", "Tennis", "Nike AF1", "Adidas predator"]
let precioCalzado = [20000, 80000, 120000, 190000]
let deportes = ["Balón de basket", "Balón de fútbol", "Pelota de tenis", "Raqueta tenis"]
let precioDeportes = [125000, 70000, 34000, 195000]
let moda = ["Sueter", "Camisa", "Camisa tipo polo", "Pantalon levi´s"]
let precioModa = [40000, 50000, 75000, 350000]
let productos = [tecno, calzado, deportes, moda]
let precios = [precioTecno, precioCalzado, precioDeportes, precioModa]  



carrito.addEventListener("click", () => {
    document.getElementById("factura").style.display = "flex"
})
equis.addEventListener("click", () => {
    document.getElementById("factura").style.display = "none"
})
buscar.addEventListener("click", () => {
    if(nombre.value != ""){
        FiltradorXNombre()
    } else if(precioMin != "" || precioMax != ""){
        FiltradorXPrecio()
    } else{
        opcion1()
    }
})


function opcion1() {
    if (opcion.value === "-" && nombre.value === "" && precioMin.value === "" && precioMax.value === "") {
        cargarProductos();
    } else if (opcion.value === "tecnología" && nombre.value === "" && precioMin.value === "" && precioMax.value === "") {
        cargarSeccion(0);
    } else if (opcion.value === "calzado" && nombre.value === "" && precioMin.value === "" && precioMax.value === "") {
        cargarSeccion(1);
    } else if (opcion.value === "deportes" && nombre.value === "" && precioMin.value === "" && precioMax.value === "") {
        cargarSeccion(2);
    } else if (opcion.value === "moda" && nombre.value === "" && precioMin.value === "" && precioMax.value === "") {
        cargarSeccion(3);
    }
}

function cargarProductos() {
    section.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        for (let p = 0; p < productos[i].length; p++) {
            section.innerHTML += `
                <article id="P${i}.${p}">
                    <h2>${productos[i][p]}</h2>
                    <span>${precios[i][p]}</span>
                    <button class="btn">Agregar al carrito</button>
                </article>`;
        }
    }
}

function cargarSeccion(index) {
    section.innerHTML = "";
    for (let i = 0; i < productos[index].length; i++) {
        section.innerHTML += `
            <article id="P${index}-${i}">
                <h2>${productos[index][i]}</h2>
                <span>${precios[index][i]}</span>
                <button class="btn">Agregar al carrito</button>
            </article>`;
    }
}/* setTimeout(() => {

    const btnCarrito = Array.from(document.getElementsByClassName("btn"))
    btnCarrito.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const sectionIndex = productIndex[0].replace("P", "");
                const productPos = productIndex[1];
                aggFactura(productos[sectionIndex][productPos], precios[sectionIndex][productPos]);
            });
        });
    },100) */

/* function aggFactura(producto, precio) {
    factura.innerHTML += `
        <div>
            <h2>${producto}</h2>
            <span>${precio}</span>
        </div>`;
} */
function FiltradorXNombre(){
    let nombreProducto = nombre.value.toLowerCase()
    let productosFiltrados = []
    let preciosFiltrados = []

    productos.forEach((p, i) => {
        let seccionFiltrada = p.filter((producto, j) => {
            return producto.toLowerCase().includes(nombreProducto)
        })
        productosFiltrados.push(seccionFiltrada)
        preciosFiltrados.push(precios[i].filter((p, j) => {
            return p[j].toLowerCase().includes(nombreProducto)
        }))
    })
    section.innerHTML = "";
    for (let i = 0; i < productosFiltrados.length; i++) {
        for (let p = 0; p < productosFiltrados[i].length; p++) {
            section.innerHTML += `
                <article id="P${i}.${p}">
                    <h2>${productosFiltrados[i][p]}</h2>
                    <span>${preciosFiltrados[i][p]}</span>
                    <button class="btn">Agregar al carrito</button>
                </article>`;
        }
    }
}
function FiltradorXPrecio() {
    const min = parseFloat(precioMin.value);
    const max = parseFloat(precioMax.value);

    let productosFiltrados = [];
    let preciosFiltrados = [];

    precios.forEach((seccion, i) => {
        let seccionFiltrada = seccion.filter((producto, j) => {
            return precios[i][j] >= min && precios[i][j] <= max;
        });
        preciosFiltrados.push(seccionFiltrada);
        productosFiltrados.push(precios[i].filter(precio => precio >= min && precio <= max));
    });
    section.innerHTML = "";
    for (let i = 0; i < productosFiltrados.length; i++) {
        for (let p = 0; p < productosFiltrados[i].length; p++) {
            section.innerHTML += `
                <article id="P${i}.${p}">
                    <h2>${productosFiltrados[i][p]}</h2>
                    <span>${preciosFiltrados[i][p]}</span>
                    <button class="btn">Agregar al carrito</button>
                </article>`;
        }
    }
}
/* COACH, TENGO DIFICULTAD CON LOS FILTRADORES, SI TIENE ALGUNA 
SOLUCION O CONSEJO ME DICE,
SEGUN MI LOGICA, DEBERIA FILTRAR, PERO NO LO HACE, 
POR ENDE AUN NO HE HECHO LA FUNCION PARA AGREGAR A LA FACTURA
Y EL .REDUCE PARA PAGAR EL TOTAL*/