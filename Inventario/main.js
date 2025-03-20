const n  = document.getElementById("nombre")
const p  = document.getElementById("precio")
const s  = document.getElementById("stock")
const buscar  = document.getElementById("buscar")
const tbody = document.getElementById("tbody")

let inventario = []

document.querySelector("form").addEventListener("submit", ()=>{
    let nombre = n.value
    let precio = p.value
    let stock = s.value
    const producto = {
        nombre: nombre,
        precio: precio,
        stock : stock
    }
    inventario.push(producto)
    actualizar()
    n.value = ""
    p.value = ""
    s.value = ""
})
function actualizar(inventario){

    tbody.innerHTML = ""

    setTimeout(() => {

        inventario.forEach((registro, i) =>{
            tbody.innerHTML +=`<tr id="f${i}">
            <td>${i+1}</td>
            <td contenteditable="true" onblur="editarProducto(${i}, 'nombre', this.textContent)">${registro.nombre}</td>
            <td contenteditable="true" onblur="editarProducto(${i}, 'precio', this.textContent)">${registro.precio}</td>
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

    document.getElementById(`f${i}`).remove()
    inventario.splice(i, 1)
    actualizar()
}
function buscador(){
   let busqueda = inventario

   if(buscar.value !== ""){
        busqueda = busqueda.filter(producto => producto.nombre.toLowerCase().includes(buscar.value.toLowerCase()))
   }
   inventario = busqueda
   actualizar()
}
function editarProducto(i, campo, valor) {
    if (campo === "precio") {
        let nuevoPrecio = parseFloat(valor);
        if (isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
            alert("Precio no válido");
            actualizarListaProductos();
            return;
        }
        productos[index].precio = nuevoPrecio;
    } else if (campo === "cantidad") {
        let newStock = parseInt(valor);
        if (isNaN(nuevaCantidad) || nuevaCantidad < 0) {
            alert("Cantidad no válida");
            actualizarListaProductos();
            return;
        }
        inventario.stock = newStock;
    } else {
        inventario[i][campo] = valor.trim();
    }
    actualizar();
}