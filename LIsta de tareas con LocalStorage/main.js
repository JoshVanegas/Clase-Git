const tarea = document.getElementById("tarea")
const form = document.querySelector("form")
const btnDeleteAllTasks = document.getElementById("borrarTareas")
const lista = document.getElementById("lista")

let tareas = []

actualizar()
form.addEventListener("submit",()=>{
    tareas = JSON.parse(localStorage.getItem("tareas")) || []

    tareas.push({tarea: tarea.value, check: false})
    localStorage.setItem("tareas", JSON.stringify(tareas))
    tarea.value = ""
    actualizar()
})
function actualizar(){

    tareas = JSON.parse(localStorage.getItem("tareas")) || []

    lista.innerHTML=""

    setTimeout(() => {
        tareas.forEach((tarea, i)=>{

            lista.innerHTML+=`<li id="t${i}"><input type="checkbox" onclick="check(${i}, this) id="c${i}"><p id="p${i}">${tarea.tarea}</p><button class="borrarTarea">&cross;</button></li>`
            guardarBtns()
            if(tareas.check){
                document.getElementById(`p${i}`.style.color="green")
                document.getElementById(`c${i}`).checked = true
            }
        })
    }, 300);
    
}

function guardarBtns(){
    
    let btns = Array.from(document.getElementsByClassName("borrarTarea"))
    
    btns.forEach((btn, i)=>{
        btn.addEventListener("click", ()=>{
            tareas = JSON.parse(localStorage.getItem("tareas")) || []
            tareas.splice(i, 1)
            localStorage.setItem("tareas", JSON.stringify(tareas))
            actualizar()
        })
    })
}
btnDeleteAllTasks.addEventListener("click",()=>{

    localStorage.clear()
    actualizar()
})
function check(index, input){
    tareas = JSON.parse(localStorage.getItem("tareas")) || []

    if(input.checked){
        document.getElementById(`p${index}`).style.color = "red"
        tareas[index].check = true
    }else{
        document.getElementById(`p${index}`).style.color = "green"
        tareas[index].check = false
    }
    localStorage.setItem("tareas", JSON.stringify(tareas))
}