const atender = document.getElementById("atender")
const cliente = document.getElementById("nombre")
const lista = document.getElementById("lista")
const div = document.getElementById("modal")

let clientes = []

document.querySelector("form").addEventListener("submit", ()=> {
    let hora = new Date() 
    let nombre = cliente.value
    clientes.push({nombre, hora})
    div.innerHTML = `<p><span><strong>${cliente.value}</strong></span> en la lista de espera</p>`
    mostrarModal()
    actualizar()
})
atender.addEventListener("click", ()=>{
    div.innerHTML= `Atendiendo a ${clientes[0].nombre}`
    mostrarModal()
    if(clientes.length >= 1){
        clientes.shift()
    }
    actualizar()
    cliente.value = ""
})
function actualizar(){
    lista.innerHTML=""
    setInterval(() => {
        clientes.forEach((cliente,i) =>{
            let tiempo = obtenerTiempo(cliente[i].hora)
            lista.innerHTML += `<li>
                <p>${cliente[i]}</p>
                <p class="tiempo">${tiempo}</p>
            </li>`
        })
    }, 1000);
}
function mostrarModal(){
    div.classList.add("modalActivated")
    setTimeout(() => {
        div.classList.remove("modalActivated")
    }, 1000)
}
function obtenerTiempo(time){

    let ahora = new Date();
    let diferencia = (ahora - time) / 1000;
    let minutos = Math.floor(diferencia / 60);
    let segundos = Math.floor(diferencia % 60);
    return(`${minutos}m ${segundos}s`);
}
function veriPerfiles(){

    if (clientes.length == 0){
        document.querySelector("h2").style.display = "none";
        atender.style.display = "none";
    } else {
        document.querySelector("h2").style.display = "flex";
        atender.style.display = "flex";
    }

}

veriUsers();

setInterval( actualizarLista, 1000 );