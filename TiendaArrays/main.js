const form = document.getElementById("form")
const form2 = document.getElementById("form2")
const section = document.getElementById("juegos")

//ARRAYS
let juegos = ["EA FC 25", "GTA VI", "BATTTLEFIELD 4", "FORZA HORIZON 5", "MK 11"]
let imagenes = [`https://th.bing.com/th/id/OIP.TiQyH9z0rBpjT8GG3yJ2CwHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain`,`https://th.bing.com/th/id/OIP.CzMibmTT8C1XveJ-BJTOAQHaEK?rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.GhQo_1V52qLuwvG_9TYy0AHaHa?rs=1&pid=ImgDetMain`, `https://th.bing.com/th/id/OIP.3lq1_tnvF2X6LEpO4KSlugHaId?rs=1&pid=ImgDetMain`, `https://th.bing.com/th/id/R.b8c86f4a8f4414a62c5fe37b8accce39?rik=xJqij74zDFdktw&pid=ImgRaw&r=0`
]
let precios = [200000, 300000, 100000, 180000, 140000]
let precioDes = []
//-----------------------------------------------------------------------
//BOTON DESCUENTOS
document.getElementById("descuento").addEventListener("click", () => {

    form.style.display = "flex"
    conOpacity()
})
//-----------------------------------------------------------------------
//BOTON SALIR("X")
document.getElementsByClassName("X").addEventListener("click", () => {

    form.style.display = "none"
    form2.style.display = "none"
    sinOpacity()
    document.getElementById("edad").value = ""

})
//-----------------------------------------------------------------------
//FORMULARIO DESCUENTOS
form.addEventListener("submit", () => {

    let edad = Number(document.getElementById("edad").value)
    
    form.style.display = "none"
    document.getElementById("descuento").style.display += "none"
    if (edad < 18){
        precioDes = precios.map( p => p * 0.5)
        alert("Obtuviste un descuento del 50%")
    } else if ( edad >= 18){
        precioDes = precios.map( p => p * 0.65)
        alert("Obtuviste un descuento del 65%")
    }

    section.innerHTML = ""

    setTimeout(() => {
        for(let i = 0; i < precios.length; i++){
            section.innerHTML += `<article>
                <h2>${juegos[i]}</h2>
                <figure>
                    <img src="${imagenes[i]}" alt="">
                    <figcaption></figcaption>
                </figure>
                <span >$ ${precioDes[i]}</span>`
        }
    }, 100);
    sinOpacity()
    edad = ""
})
//-----------------------------------------------------------------------
//FUNCIONES
function conOpacity(){
    document.querySelector("header").style.opacity = "0.3"
    document.querySelector("main").style.opacity = "0.3"
}
function sinOpacity(){
    document.querySelector("header").style.opacity = "1"
    document.querySelector("main").style.opacity = "1"
}
//-----------------------------------------------------------------------
//BOTON AGREGAR JUEGO
document.getElementById("add").addEventListener("click", () => {
    
    conOpacity()
    form2.style.display = "flex"
})
//-----------------------------------------------------------------------
//FORMULARIO AGREGAR JUEGO 
form2.addEventListener("submit", () => {
    let nombre = document.getElementById("nombre").value
    let imagen = document.getElementById("imagen").value
    let precio = document.getElementById("precio").value
    if(nombre == "" || imagen == "" || precio == ""){
        form2.style.display = "none"
        sinOpacity()
        alert("Complete todos los campos")
    }else{
    juegos.push(nombre)
    imagenes.push(imagen)
    precios.push(precio)
    section.innerHTML = ""
    form2.style.display = "none"
    setTimeout(() => {
        for(let i = 0; i < precios.length; i++){
            section.innerHTML += `<article>
                <h2>${juegos[i]}</h2>
                <figure>
                    <img src="${imagenes[i]}" alt="">
                    <figcaption></figcaption>
                </figure>
                <span >$ ${precios[i]}</span>`
        }
    }, 100);
    sinOpacity()
    }
})
//-----------------------------------------------------------------------
//FORMULARIO ELIMINAR JUEGO
document.getElementById("delete").addEventListener("click", () => {
    juegos.pop()
    imagenes.pop()
    precios.pop()
    section.innerHTML = ""
    setTimeout(() => {
        for(let i = 0; i < precios.length; i++){
            section.innerHTML += `<article>
                <h2>${juegos[i]}</h2>
                <figure>
                    <img src="${imagenes[i]}" alt="">
                    <figcaption></figcaption>
                </figure>
                <span >$ ${precios[i]}</span>`
        }
    }, 100);
})
//-----------------------------------------------------------------------