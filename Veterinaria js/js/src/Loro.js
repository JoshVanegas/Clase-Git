import { Animal } from "./Animal.js";

export class Loro extends Animal{

    constructor(nombre, edad, duenio){
        super(nombre,edad,duenio)
        this.tipo = "Loro"
    }
    hacerRuido(){
        return (`${this.nombre} está garriendo`)
    }
}