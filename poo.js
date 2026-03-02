class Pizza {
    constructor(masa,tamano,ingredientes) {
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }

    preparar() {
    console.log(`preparando una pizza de ${this.tamano} con masa ${this.masa} y los
         siguientes ingredientes: ${this.ingredientes}.`);
         return this;    
    }

    honear() {
        console.log("la pizza esta en el honro..");
        return this;
    }

    empacar() {
        console.log("Empacado la pizza..")
        return this; 
    }
};

const pizzaHawaiana = new Pizza("delgada" , "mediana" , ["jamon" , "piña" , "queso"]);
console.log(pizzaHawaiana.preparar());
console.log(pizzaHawaiana.honear());
console.log(pizzaHawaiana.empacar());

const pizzapeperoni = new Pizza("doble masa" , "Grande" , ["jamon , carne , chorizo , longaniza  "]);
console.log(pizzapeperoni.preparar().honear().empacar());

class Combos extends Pizza{
    constructor()
}