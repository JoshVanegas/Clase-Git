import { Main } from "./control.js";

const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const tipo = document.getElementById("select")
const duenio = document.getElementById("duenio")
const form = document.getElementById("form")
const DltAll = document.getElementById("borrarTodo")
const lista = document.getElementById("lista")
const btnMostrar = document.getElementById("mostrar")

const main =  new Main()
console.log(main)

let mostrado = false;
btnMostrar.addEventListener("click", ()=>{
    document.getElementById("DivLista").style.display = mostrado ? "none" : "flex";
    btnMostrar.textContent = mostrado ? "Mostrar lista" : "Ocultar lista";

    mostrado = !mostrado;
});

DltAll.addEventListener("click", ()=>{
    main.borrarTodo();
   mostrarMascotas()
})

form.addEventListener("submit", ()=>{
    main.agregarMascotas(nombre.value, edad.value, duenio.value, tipo.value)
    mostrarMascotas()
    form.reset()
})

function mostrarMascotas() {
    if (!lista) {
        console.error("Elemento 'lista' no encontrado en el DOM.");
        return;
    }

    lista.innerHTML = "";
    const mascotas = main.obtenerMascotas();

    if (!mascotas || mascotas.length === 0) {
        lista.innerHTML = "<p>No hay mascotas registradas.</p>"; 
        return;
    }

    mascotas.forEach((mascota, i) => {
        const item = document.createElement("li");
        item.innerHTML = `<div>
                            <span>${mascota.nombre} es un ${mascota.tipo.toLowerCase() || "Tipo desconocido"} que tiene ${mascota.edad} años. ${mascota.duenio || "Dueño desconocido"} es su dueño.</span>
                            <span>${mascota.hacerRuido ? mascota.hacerRuido() : "Sonido no disponible"}</span>
                          </div>`;

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("borrar");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => {
            main.borrarMascota(i);
            mostrarMascotas(); 
        };

        item.appendChild(btnEliminar);
        lista.appendChild(item); 
    });
}

const nombreBusqueda = document.getElementById("nombreBuscar").value.toLowerCase();
function buscador() {
    const mascotas = main.obtenerMascotas();

    lista.innerHTML = ""; 

    mascotas.filter(mascota => mascota.nombre.toLowerCase().includes(nombreBusqueda))
        .forEach((mascota, i) => {
            const item = document.createElement("li");
            item.innerHTML = `<div>
                                <span>${mascota.nombre} es un ${mascota.tipo} que tiene ${mascota.edad} años. ${mascota.duenio} es su dueño.</span>
                                <span>${mascota.hacerRuido ? mascota.hacerRuido() : "Sonido no disponible"}</span>
                              </div>`;
            lista.appendChild(item);
        });
}
mostrarMascotas()


