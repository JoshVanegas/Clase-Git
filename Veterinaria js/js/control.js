import { Gato } from "./src/Gato.js";
import { Perro } from "./src/Perro.js"
import { Hamster } from "./src/Hamster.js"
import { Loro } from "./src/Loro.js"


const clases = {
    Gato,
    Hamster,
    Loro,
    Perro
}

export class Main{

    constructor(){
        this.mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
    }

    guardarMascota() {
        localStorage.setItem("mascotas", JSON.stringify(this.mascotas));
        alert("Mascota guardada correctamente")
    }
    

    agregarMascotas(nombre, edad, duenio, tipo) {
        if (!clases[tipo]) {
            alert("Escoja un tipo válido de mascota");
            return;
        }
        
        const nuevaMascota = new clases[tipo](nombre, edad, duenio);
    
        this.mascotas.push(nuevaMascota);
        this.guardarMascota()
    }
    obtenerMascotas() {
        let variable = JSON.parse(localStorage.getItem("mascotas"))
        return variable.map(mascota => {
            return new clases[mascota.tipo](mascota.nombre, mascota.edad, mascota.duenio);
        }) || [];
    }    
    borrarMascota(index){
        this.mascotas.splice(index, 1)
        localStorage.setItem("mascotas", JSON.stringify(this.mascotas))
    }
    borrarTodo(){
        localStorage.removeItem("mascotas")
        this.mascotas = []
    }
}