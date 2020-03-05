//ARRAYS

//Son una estructura de datos de tipo objeto ya que es un valor que va a guardar mas valores dentro de si mismo(pueden ser numeros, string, objetos, arrays, etc)

//Los arrays se crean dentro de [] y se asignan a una variable, para acceder  dicho array debemos usar su ombre y entre [] la posicion del elemento(empiezan en 0)

var frutas = ["manzana", "platano", "cereza", "fresa"];

frutas[2];    //estro traera el string "cereza" (empieza en 0)

frutas.length  //muestra la cantidad de elementos del array 


/*Cuando hablamos de arrays tenemos 2 tipos de metodos(elementos) que nos ayudaran a generar cosas con los arrays:

    1-Mutar contenidos del array (agregar o quitar elementos)

        -.push()    Añade elementos al final del array
        -.pop()     elimina el ultimo elemento del array
        -.unshift     Añade elementos al comienzo del array
        -.shift     elimina el primer elemento del array
        -.indexof      identifica la posicion del elemento que pongamos
*/
    //Ejemplos

        //.push()
        var masFrutas = frutas.push("uvas");  //anade "uvas" al final del array "frutas"

        //.pop()
        var ultimo = frutas.pop("uvas");    //elimina "uvas" del array

        //.unshift
        var ultimo = frutas.unshift("uvas"); //añade "uvas" al comienzo del array

        //.shift
        var ultimo = frutas.shift("uvas");  //elimina "uvas" del comienzo del array

        //.indexof
        var ultimo = frutas.indexOf("cereza");  //muestra la posicion del elemento cereza en el array frutas