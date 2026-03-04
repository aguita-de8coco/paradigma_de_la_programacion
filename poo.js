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

    hornear() {
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
console.log(pizzaHawaiana.hornear());
console.log(pizzaHawaiana.empacar());

const pizzapeperoni = new Pizza("doble masa" , "Grande" , ["jamon , carne , chorizo , longaniza  "]);
console.log(pizzapeperoni.preparar().hornear().empacar());

class combos extends Pizza {
    constructor(combo , cantidad , tamano , masa , ingrediente, bebidas, postres)  {
        super(masa, tamano, ingrediente);
        this.combo = combo
        this.cantidad = cantidad
        this.bebidas = bebidas
        this.postres = postres
    };

    elegircombo() {
        this.preparar();
        this.hornear();
        this.empacar();

        console.log(
            `has elegido el combo ${this.combo} que incluye ${this.cantidad} pizzas de tamano ${this.tamano} con masa
            ${this.masa} y los siguientes ingredientes: ${this.ingredientes}. ademas, incluye una bebida de ${this.
                bebida} y un postre de ${this.postre}.`
        );
        return this;    
   
           
    };


};


const combofamiliar = new combos("Familiar " , 4 , "Grande", "Delgada", ["jamon", "piña", "queso"], "refresco", "helado");
console.log(combofamiliar.elegircombo());