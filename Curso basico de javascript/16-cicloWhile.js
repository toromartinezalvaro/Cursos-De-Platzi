// CICLOS O LOOPS

//CICLO WHILE

var estudiantes = ["alvaro", "maria", "sergio", "rosa"];

function saludarEstudiantes(estudiante){
    console.log(`hola ${estudiante}`);   //llama un string y una variable concatenada
}

while(estudiantes.length > 0){
    console.log(estudiantes); //muestra el contenido del array
    var estudiante = estudiantes.shift();   //asigna el primer elemento del array(alvaro) que el metodo .shift elimino del array "estudiantes"
    saludarEstudiantes(estudiante); //saluda el estudiante (alvaro)
}

    //Explicacion:
    //mientras estudiantes.lengh sea mayor a 0 se repetira el ciclo
    //se crea la variable estudiante y se le asigna el primer elemento del array usando .shift() que luego de asignarlo lo eliminara del array
    //se usa la funcion saludarEstudiante(); con el parametro estudiante que previamente fue asignado al primer dato del array
    //al repetirse el ciclo el primer elemento ya no sera "alvaro" por que .shift lo elimino, por lo cual el siguiente elemento es "maria"
    //luego de eliminar todos los elementos, no quedara ninguno por lo cual estudiantes.length sera igual a 0 y al no ser mayor que cero se saldra del ciclo while despues de haber saludado cada estudiante 