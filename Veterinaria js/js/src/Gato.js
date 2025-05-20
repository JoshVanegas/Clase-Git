import { Animal } from "./Animal.js";

export class Gato extends Animal{
    
    constructor(nombre, edad, duenio){
        super(nombre,edad,duenio)
        this.tipo = "Gato"
    }
    hacerRuido(){
        return (`${this.nombre} está maullando`)
    }
}