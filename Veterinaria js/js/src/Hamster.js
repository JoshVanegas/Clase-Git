import { Animal } from "./Animal.js";

export class Hamster extends Animal{

    constructor(nombre, edad, duenio){
        super(nombre,edad,duenio)
        this.tipo = "Hamster"
    }
    hacerRuido(){
        return (`${this.nombre} está chirridando`)
    }
}