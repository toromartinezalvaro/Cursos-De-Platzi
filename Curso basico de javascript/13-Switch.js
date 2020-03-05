//SWITCH

//Tambien es una forma de validar, de generar una condicion, es diferente al "if" pero hace lo mismo 

//el switch funciona por casos, si al validar el caso el resultado es true, se ejecutara el codigo que esta dentro del mismo, si el resultaco es false, se pasara al siguiente caso, despues de cada caso, debemos usar un "break" para indicar que hasta ese punto va a ejecutarse el caso, luego de eso se saldra del switch y se continuara con el codigo. Por ultimo usaremos un "default" que se usara en caso de que no se cumpla ninguno de los casos

    //nota: Dentro de los parentesis pondremos lo que quermos validar y frente a cada "case" (antes de los parentesis) pondremos el resultado de los casos posibles


    var numero = 1;

    switch(numero){
        case 1:
            console.log("soy uno!");
            break;
        case 10:
            console.log("soy un 10!");
            break;
        case 100:
            console.log("soy un 100!");
            break;
        default:
            console.log("no soy nada");

    }

