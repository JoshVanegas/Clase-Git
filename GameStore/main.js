document.addEventListener("DOMContentLoaded", () =>{
    actualizar()
})
const header = document.querySelector("header") 
const main = document.querySelector("main")
const XForm = Array.from(document.getElementsByClassName("XForm"))
const Form1 = document.getElementById("form")
const Form2 = document.getElementById("form2")
const add = document.getElementById("add")
const descuento = document.getElementById("descuento")
const section = document.getElementById("juegos")
let XArticle = []
let juegos = ["EA FC 25", "GTA VI", "BATTTLEFIELD 4", "FORZA HORIZON 5", "MK 11"]
let imagenes = [`https://th.bing.com/th/id/OIP.TiQyH9z0rBpjT8GG3yJ2CwHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain`,`https://th.bing.com/th/id/OIP.CzMibmTT8C1XveJ-BJTOAQHaEK?rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.GhQo_1V52qLuwvG_9TYy0AHaHa?rs=1&pid=ImgDetMain`, `https://th.bing.com/th/id/OIP.3lq1_tnvF2X6LEpO4KSlugHaId?rs=1&pid=ImgDetMain`, `https://th.bing.com/th/id/R.b8c86f4a8f4414a62c5fe37b8accce39?rik=xJqij74zDFdktw&pid=ImgRaw&r=0`
]
let precios = [200000, 300000, 100000, 180000, 140000]
let precioDes = []

function actualizar(){
    section.innerHTML = ""
    setTimeout(() => {
        for(let i = 0; i < precios.length; i++){
            section.innerHTML += `<article id="A${i}">
                <button class="XArticle">X</button>
                <h2>${juegos[i]}</h2>
                <figure>
                    <img src="${imagenes[i]}" alt="${juegos[i]}">
                    <figcaption></figcaption>
                </figure>
                <span >$ ${precios[i]}</span>
                </article>`
        }
    }, 100);
    setTimeout(() =>{
        XArticle = Array.from(document.getElementsByClassName("XArticle"));
        console.log("Botones guardados en el array:", XArticle); // Verifica que los botones se guarden en el array
        XArticle.forEach((equises, index) => {
            equises.addEventListener("click", () => {
                if (confirm("¿Deseas eliminar este juego?")) {
                    document.getElementById(`A${index}`).remove();
                    juegos.splice(index, 1);
                    imagenes.splice(index, 1);
                    precios.splice(index, 1);
                    actualizar();
                } else {
                    alert("Has cancelado la eliminación del juego");
                }
            }
        )})
    },1000)
}

XForm.forEach(equis =>{
    equis.addEventListener("click", ()=>{
        Form1.style.display = "none"
        Form2.style.display = "none"
        sinOpacity()
    })
})

descuento.addEventListener("click", () =>{
    Form1.style.display = "flex"
    conOpacity()
})
Form1.addEventListener("submit", () => {

    
    Form1.style.display = "none"
    descuento.style.display += "none"
    hacerDes()
    conDescuento()
    edad = ""
    sinOpacity()
})
function hacerDes(){

    let edad = Number(document.getElementById("edad").value)

    if (edad < 18){
        precioDes = precios.map( p => p * 0.5)
        alert("Obtuviste un descuento del 50%")
    } else if ( edad >= 18){
        precioDes = precios.map( p => p * 0.65)
        alert("Obtuviste un descuento del 65%")
    }
}
function conDescuento(){
    section.innerHTML = ""
    setTimeout(() => {
        for(let i = 0; i < precioDes.length; i++){
            section.innerHTML += `<article id="A${i}">
                <button class="XArticle">X</button>
                <h2>${juegos[i]}</h2>
                <figure>
                    <img src="${imagenes[i]}" alt="${juegos[i]}">
                    <figcaption></figcaption>
                </figure>
                <span >$ ${precioDes[i]}</span>
                </article>`
        }
    }, 100);
    setTimeout(() =>{
        XArticle = Array.from(document.getElementsByClassName("XArticle"));
        console.log("Botones guardados en el array:", XArticle); // Verifica que los botones se guarden en el array
        XArticle.forEach((equises, index) => {
            equises.addEventListener("click", () => {
                if (confirm("¿Deseas eliminar este juego?")) {
                    document.getElementById(`A${index}`).remove();
                    juegos.splice(index, 1);
                    imagenes.splice(index, 1);
                    precioDes.splice(index, 1)
                    precios.splice(index, 1);
                    conDescuento();
                } else {
                    alert("Has cancelado la eliminación del juego");
                }
            }
        )})
    },1000)
}
add.addEventListener("click", () => {
    Form2.style.display = "flex"
    conOpacity()
})
Form2.addEventListener("submit", () => {
    let n = document.getElementById("nombre").value
    let imagen = document.getElementById("imagen").value
    let precio = document.getElementById("precio").value
    let nombre = n.toUpperCase()
    if(nombre == "" || imagen == "" || precio == ""){
        alert("Complete todos los campos")
        nombre = ""
        imagen = ""
        precio = ""
    }else{
        juegos.push(nombre)
        imagenes.push(imagen)
        precios.push(precio)
        n.value = ""
        imagen.value = ""
        precio.value = ""
        Form2.style.display = "none"
        sinOpacity()
    }
    if(descuento.style.display == "none"){
        hacerDes()
        conDescuento()
    } else {
        actualizar()
    }
})

function conOpacity(){
    document.querySelector("header").style.opacity = "0.3"
    document.querySelector("main").style.opacity = "0.3"
}
function sinOpacity(){
    document.querySelector("header").style.opacity = "1"
    document.querySelector("main").style.opacity = "1"
}