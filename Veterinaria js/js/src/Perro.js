import { Animal } from "./Animal.js"

export class Perro extends Animal{

    constructor(nombre, edad, duenio){
        super(nombre,edad,duenio)
        this.tipo = "Perro"
    }
    hacerRuido(){
        return (`${this.nombre} esta ladrando`)
    }
}