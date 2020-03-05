/*
Que son las funciones:

Son un conjunto de sentencias que podemos usar para generar ciertas acciones con los valores que y guardamos previamente en las variables. Son porocedimientos o tareas que se realizan dentro de la funcion para que nos generen otra cosa

Tipos de funciones:

    1-Declarativas: usamos la palabra reservada "funcion" seguido del nombre de la funcion, lñuego abrimos y cerramos parentesis(dentro de estos pondremos los "Parametros" que luego podremos usar al llamar la funcion) seguido de llaves y dentro de estas llaves escribiremos el codigo que ejecutara las tareas de la funcion, si no usamos la palabra reservada "return" la funcion ejecutar la tarea pero no retornara ningun valor, ejemplo: 

        function miFuncion(){
            return 3;
        }


    2- De Expresion o anonimas:el funcionamiento es el mismo, solo que en este tipo de funcion, declramos una variable y a esta le asignamos la funcion que queremos que ejecute al llamar la variable, ejemplo:

        var miFuncion = function(a,b){
            return a + b;
        }

Parametros de una funcion:
Los parametros son los valores que la funcion luego podra usar para ejecutar una tarea, los parametros se escriben dentro de los parentesis que tiene la funcion (se deben separar por comas y al usarlos se usan en ese mismo orden)

Llamado de una funcion:
Para llamar una funcion, escribirmos el nombre de la funcion seguido de parentesis y por ultimo terminamos con punto y coma. Es importante recordar que al llamar una funcion, agregaremos los valores con los que va a trabajar dentro de los parentesis y separados por coma, los valores se asignaran en el orden respectivo en el que se generaron los parametros en la funcion
    
        miFuncion();


Ejemplos de funciones:

    -Declarativa:
        function saludarEstudiantes(estudiante){
            console.log("hola " + estudiante);
        }

        saludarEstdiantes("alvaro");

            El resultado seria "hola alvaro"


Como generar una plantilla de cadena de texto (si tengo por ejm una base de datos, tomara los datos y repetira la funcion con cada dato sin tener que hacer un console.log por cada dato). Esas comillas se sacan con Alt + 96

        function saludarEstudiantes(estudiante){
            console.log(`hola ${estudiante}`);
        }

        saludarEstudiantes("Diego");
    
    Al hacerlo de esta forma, se puede conectar a una base de datos y cada vez que algun nombre nuevo sea ingresado lo hara con ese dato sin generar de nuevo ese codigo manualmente


*/

function sumar(a,b){
    var resultado = a + b;
    return resultado;
}

    sumar(3,5); //el resultado sera 8
