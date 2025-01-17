const tarea = document.getElementById("tarea")
const tabla = document.querySelector("table")
let arrayt = []
document.getElementById("btn1").addEventListener("click", () => {

    let con = 0
    let t = tarea.value
    if(arrayt.length > 4){
        arrayt.push(tarea)
        tabla.innerHTML= `<tr> <td>  </td> ${arrayt[con]} <td> </td> </tr>`
        con++
    }
    tabla.style.display = "flex"

})