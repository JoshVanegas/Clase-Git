const n  = document.getElementById("nombre")
const p  = document.getElementById("precio")
const s  = document.getElementById("stock")
const buscar  = document.getElementById("buscar")
const tbody = document.getElementById("tbody")

let inventario = []
document.querySelector("form").addEventListener("submit", () => {
    let nombre = n.value.trim();
    let precio = parseFloat(p.value);
    let stock = parseInt(s.value);

    if (!nombre || isNaN(precio) || isNaN(stock) || precio <= 0 || stock < 0) {
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return;
    }

    const producto = {
        id: inventario.length,
        nombre: nombre,
        precio: precio,
        stock: stock
    };

    inventario.push(producto);
    actualizar(); 
    n.value = "";
    p.value = "";
    s.value = "";
});

function actualizar(lista=inventario){

    tbody.innerHTML = ""

    setTimeout(() => {

        lista.forEach((registro, i) =>{
            tbody.innerHTML +=`<tr id="f${registro.id}">
            <td>${i}</td>
            <td contenteditable="true" onblur="editarProducto(${i}, 'nombre', this.textContent)">${registro.nombre}</td>
            <td contenteditable="true" onblur="editarProducto(${i}, 'precio', this.textContent)">${registro.precio.toFixed(2)}</td>
            <td contenteditable="true" onblur="editarProducto(${i}, 'stock', this.textContent)">${registro.stock}</td>
            <td><button class="delete" onclick="eliminar(${i})">Eliminar</button></td>
            </tr>`
        })
    }, 300);
    /* const filas = Array.from(document.querySelectorAll("tr"))

    filas.forEach((fila, i)=>{
        fila.setAttribute("id",`f${i}`)
    }) */
}
function eliminar(i){
    inventario.splice(i, 1)
    actualizar()
}
function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
        clearTimeout(debounceTimer); 
        debounceTimer = setTimeout(() => func(...args), delay); 
    };
}

const filtrarConDebounce = debounce(filtrador, 300);
buscar.addEventListener("input", filtrarConDebounce);
function filtrador() {
    const textoBusqueda = buscar.value.toLowerCase().trim();
    if (textoBusqueda === "") {
        actualizar(); 
        return;
    }
    const resultados = inventario.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBusqueda)
    );
    actualizar(resultados);
}

function editarProducto(i, campo, valor) {
    if (campo === "precio") {
        let nuevoPrecio = parseFloat(valor);
        if (isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
            alert("Precio no válido");
            actualizar();
            return;
        }
        inventario[i].precio = nuevoPrecio;
    } else if (campo === "stock") {
        let newStock = parseInt(valor);
        if (isNaN(newStock) || newStock < 0) {
            alert("Cantidad no válida");
            actualizar();
            return;
        }
        inventario[i].stock = newStock;
    } else {
        inventario[i][campo] = valor.trim();
    }
    actualizar();
}