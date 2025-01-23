const tarea = document.getElementById("tarea")
const tabla = document.querySelector("table")
const body = document.getElementById("body")
const p = document.getElementById("parrafo")

let arrayt = []
let con = 0
let t = ""

document.getElementById("add").addEventListener("click", () => {

    if(con < 5){

        t = tarea.value

        if(t != ""){
            arrayt.push(t)
            tarea.value = ""
            acomodar()
            tabla.style.display = "block"
            tarea.focus()
            p.innerText = ""
            con++
        } else{
            p.innerText = "Por favor, ingresa una tarea"
        }
        excede()
        }
})
document.getElementById("random").addEventListener("click", () => {

    if( con < 5 && tarea.value != "" ){
        t = tarea.value
        let posicion = Number(prompt("En que posición deseas agregar la tarea")) - 1
        if (posicion > con && posicion < 0){
            p.innerText = "Posición fuera de rango"
        } else {
            arrayt.splice(posicion, 0, t)
            tarea.value = ""
            con++
            acomodar()
            tarea.focus()
            p.innerText = ""
            excede()
        }
    }
})
document.getElementById("primero").addEventListener("click", () => {
    arrayt.unshift(tarea.value)
    acomodar()
    excede()
    con++
})
document.getElementById("borrar1").addEventListener("click", () => {

    arrayt.shift()
    acomodar()
    ocultar()
    con--
})
document.getElementById("especifico").addEventListener("click", () => {
    
    let eliminada = Number(prompt("Qué tarea desea eliminar?")) - 1
    if(eliminada == isNaN){
        alert("Ingrese un valor válido")
    }else{
        arrayt.splice(eliminada, 1)
        acomodar()
        ocultar()
        con--
    }
})
document.getElementById("delete").addEventListener("click", () => {

    arrayt.pop()
    document.getElementById(`f${con}`).remove()
    con--
    ocultar()
})
function acomodar(){
    body.innerHTML = ""
    for (let i = 0; i < arrayt.length; i++){
        body.innerHTML = `${body.innerHTML}<tr id="f${i+1}"><td>${i+1}</td><td>${arrayt[i]}</td></tr>`
    }
}
function ocultar(){
    if(arrayt.length == 0  || con == 0){
        tabla.style.display = "none"
        p.innerText = "Sin tareas por el momento"
    }
    if(con < 5){
        p.innerText =""
    }
}
function excede(){
    if(con >= 5 || arrayt.length >= 5 ){
        p.innerText = "Limite de tareas alcanzados"
    } 
}








    /*     switch(con,arrayt.length){
            case con == 0 && arrayt.length == 0: 
                tabla.style.display = "none"
                p.innerHTML = "Sin tareas por el momento"
                break;
            case con < 5:
                p.innerText = ""
                break
        } */