//Condicionales

//Para que se ejecute el codigo que contiene una condicional, la condicion que esta dentro de los parentesis debe retornar "true", seguido de EventSource, se ejecutara el codigo que se encuentre dentro de las llaves({}). En el "else if" pondremos otra condicion diferente a la del "if", si la condicion del "else if" se cumple, se ejecutara el codigo que este entre sus llaves({}), se pueden usar tantos elif como se requieran(si son muchos es mas efectivo el switch-case). Por ultimo el "else" se ejecutara cuando la condicion de arriba no se cumpla (es como un default).

    //Ejemplo:

    var edad = 18;

    if (edad === 18){
        console.log("Puedes votar por primera vez!");
    } else if (edad > 18 && edad <= 110) {
        console.log("Puedes votar de nuevo");
    } else if (edad > 110){
        console.log("Con esa edad ya debes estar muerto");
    } else {
        console.log("Aun no puedes votar")
    }


//Para hacer una condicional, se puede usar un operador  ternario haciendo uso del siguiente orden (primero la condicion, seguido del operador de comparacion( = || != || > || < || etc) luego el dato que se desea comparar, luego el signo "?" seguido de lo que queremos que ejecite si es verdadera la condicion (if), luego ":" y por ultimo lo que queremos que se ejecute si la condicion es falsa(else)):

    condition ? true : false;

    //Un ejemplo real seria el siguiente:
    var numero = 1;

    var resultado = numero === 1 ? "si, soy un 1" : "no, no soy un 1"; 