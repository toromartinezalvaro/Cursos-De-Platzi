//Programacion Orientada a Objetos (POO)

//Javascript esta diseñado en un paradigma de objetos 

//se trata de llevar un objeto del mundo fisico a el paradigma usado por javascript


var objeto = {
    parametro1: "",
    parametro2: "",
    parametro3: 0,
};


var miAuto = {    //
    marca: "toyota",
    modelo: "corolla",
    annio: 2020,

};

    //Para llamar el objeto uso la variable (miAuto) y me mostrara el objeto y lo que contiene

    //para acceder a los objetos, pondremos el nombre de la variable, luego un punto y por ultimo la palabra clave que necesitamos, ejemplo:

        miAuto.annio    //esto retornara 2020
        miAuto.marca    //esto retornara "toyota"
        miAuto.modelo   //esto retornara "corolla"


//Tambien podemos agregar una funcion a una propiedad de un objeto, a esto se le conoce como "metodo" de un objeto, ejemplo

var moto = {
    marca: "tvs",
    modelo: "sport",
    detalleDeLaMoto: function(){   //esto seria un metodo de un objeto
        console.log(`moto ${this.modelo} ${this.annio}`); 
    }
}

moto.detalleDeLaMoto();  //al ser un metodo de objeto se llama como una funcion(con los parentesis)
    //el resultado sera un console.log que imprimira el modelo y año de la moto en este caso tvs sport

//THIS(este objeto): hace referencia al objeto padre, en vez de escrubir moto.modelo, puedo simplemente escribir this.modelo (esteObjeto.modelo)

