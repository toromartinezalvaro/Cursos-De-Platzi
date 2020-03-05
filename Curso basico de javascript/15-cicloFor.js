//Loops o Ciclos 

//CICLO FOR

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiante(estudiante){
    console.log(`hola, ${estudiante}`);  //saludara a cada estudiante del array
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

    //Explicacion:
    //Primero se crea un array llamado estudiantes
    //Luego se crea una funcion llamada saludar estudiante qie tiene un console.log que saludara al estudiante que se le ingrese
    //por ultimo creamos un ciclo for que tendra una variable llamada "i" que inicia en 0, dicho ciclo for funcionara mientras "i" sea menor a la longitud del array estudiantes y en cada vuelta la variable "i" incrementara en uno
    //cada vez que se ejecute el ciclo for, este llamara a la funcion "saludarEstudiante", la cual imprimira un saludo con el nombre del estudiante que tenga la posicion "i"
    //en un principio "i" vale 0 por lo cual saluda a maria, en la segunda vuelta saluda a sergio, en la siguiente a rosa y cuando "i" es equivalente a 3 saluda a daniel 
    //luego de saludar a daniel, la variable "i" pasa a valer 4 y sale del ciclo for ya que no cumple la condicion (i < estudiantes.length)



//OTRA FORMA DE HACERLO ES:

    var estudiantes = ["maria", "sergio", "rosa", "daniel"];

    function saludarEstudiante(estudiante){
        console.log(`hola, ${estudiante}`);  //saludara a cada estudiante del array
    }

    for(var estudiante of estudiantes){   //Esto se llama "for of"
        saludarEstudiante(estudiante);
    }

    //Explicacion:
    //en este ciclo for usamos la variable estudiante(que es el singular de el array estudiantes) por lo cual estudiante se convertira en el elemento 0 del array estudiantes
    //luego usamos la palabra reservada of y el array del que extraeremos los elementos
    //este ciclo tambien va a recorrer todos los elementos del array y se ejecutara hasta que dichos elementos se terminen por eso tambien saludara a todos los estudiantes haciendo uso de la funcion "saludarEstudiantes" que esta dentro del ciclo for

    //Para usar un ciclo "for of" basta con inicializar una variable en singular de nuestro array que esta en plural, por ejemplo si el array se llama frutas, lo hariamos asi

    for(fruta of frutas){
        //el ciclo se repetira con base en la cantidad de elementos del array frutas (frutas.length)
    }