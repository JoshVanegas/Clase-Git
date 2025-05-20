const nombre = document.getElementById("nombre")
const desc = document.getElementById("descripcion")
const img = document.getElementById("imagen")
const form = document.querySelector("form")
const btnUpdate = document.getElementById("Actualizar")
const div = document.getElementById("container")
const select = document.getElementById("select")
const imagenInp = document.getElementById("imagenInp")
const divPreview = document.getElementById("divPreview")
const imgPreview = document.getElementById("imgPreview")
const btnDelete = document.getElementById("btnDelete")

let Perfil = {

    descripcion : "Una breve descripcion de ti...",
    foto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",  
    crearVista: function(){
        
        this.nombre = nombre.value;
        this.descripcion = desc.value || this.descripcion;
        this.foto = imgPreview.src || this.foto;

        form.style.display = "none";
        container.style.display = "flex";

        setTimeout(() => {
            document.getElementById("pnombre").innerText = this.nombre;
            document.getElementById("pdescripcion").innerText = this.descripcion;
            document.getElementById("pfoto").src = this.foto;
        }, 10); 

    }

}
btnUpdate.addEventListener("click", ()=>{
    container.style.display="none"
    form.style.display = "flex"
})
form.addEventListener("submit", ()=>{
    Perfil.crearVista()
    alert("Datos actualizados correctamente")
})
select.addEventListener("change", () => {

    imagenInp.setAttribute("type", imagenInp.getAttribute("type") == "file" ? "url" : "file");
    imgPreview.src = "";
    divPreview.style.display = "none";

})
imagenInp.addEventListener("input", () => {
        
    if(imagenInp.getAttribute("type") == "file"){

        let valor = imagenInp.files[0];

        let lector = new FileReader();

        lector.onload = (event) => {

            imgPreview.src = event.target.result;
            divPreview.style.display = "flex";

        }  
        
        lector.readAsDataURL(valor);

    } else {

        imgPreview.src = imagenInp.value;
        divPreview.style.display = "flex";

    }

    veriFoto();

});

function veriFoto(){

    if (imagenInp.value == ""){

        imagenInp.style.color = "red";

    } else {

        imagenInp.style.color = "rgb(153, 255, 0)";

    }

}

btnDelete.addEventListener("click", () => {

    imgPreview.src = "";
    divPreview.style.display = "none";
    imagenInp.value = "";

    veriFoto();

})
