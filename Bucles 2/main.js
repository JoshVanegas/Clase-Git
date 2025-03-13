const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const ocupacion = document.getElementById("ocupacion")
const mostrar = document.getElementById("mostrar")
const tbody = document.getElementById("tbody")

let personas = []
document.querySelector("form").addEventListener("submit", () => {
    
    let n = nombre.value
    let e = edad.value
    let o = ocupacion.value
    const persona = {
        nombre: n,
        edad: e,
        ocupacion: o
    }
    personas.push(persona)
    actualizarTabla()
    nombre.value = ""
    edad.value = ""
    ocupacion.value = ""
})
function actualizarTabla(){
    tbody.innerHTML=""
    setTimeout(() => {
        personas.forEach(persona => {
            tbody.innerHTML +=`<tr>
            <td>${persona.nombre}</td>
            <td>${persona.edad}</td>
            <td>${persona.ocupacion}</td>
            </tr>`
        });
    }, 1000);
}
let con = true;
mostrar.addEventListener("click", () =>{

    if(con){
        document.getElementById("tabla").style.display = "flex"
        mostrar.innerHTML = "Ocultar lista"
    } else{
        document.getElementById("tabla").style.display = "none"
        mostrar.innerHTML = "Mostrar lista"
    }
    con = !con
})