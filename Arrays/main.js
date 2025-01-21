const tarea = document.getElementById("tarea")
const tabla = document.querySelector("table")
const body = document.getElementById("body")
const p = document.getElementById("parrafo")

let arrayt = []
let con = 0
let t = ""

document.getElementById("btn1").addEventListener("click", () => {

    if(con < 5){

        t = tarea.value

        if(t != ""){
            arrayt.push(t)
            tarea.value = ""
            body.innerHTML= `${body.innerHTML}<tr id="f${con+1}"><td>${con+1}</td><td>${arrayt[con]}</td></tr>`
            tabla.style.display = "block"
            tarea.focus()
            p.innerText = ""
            con++
        }
        if(con >= 5 ){
            p.innerText = "Limite de tareas alcanzados"
        }
        }
})
document.getElementById("btn2").addEventListener("click", () => {

    arrayt.pop()
    document.getElementById(`f${con}`).remove()
    con--
    if(arrayt.length == 0  && con == 0){
        tabla.style.display = "none"
        p.innerHTML = "Sin tareas por el momento"
    }

})