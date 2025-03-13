const tbody = document.getElementById("tbody")
const form = document.getElementById("form")
const num = document.getElementById("numero")
const inicio = document.getElementById("inicio")
const limite = document.getElementById("limite")

form.addEventListener("submit", ()=>{
    tbody.innerHTML = ""

    let numero = Number(num.value)
    let lim = Number(limite.value)
    for(let ini = Number(inicio.value); ini <= lim; ini++){
        tbody.innerHTML += `<tr> <td>${numero} x ${ini}</td> <td>${numero * ini}</td> </tr>`
    }
    document.getElementById("tabla").style.display = "flex"
})