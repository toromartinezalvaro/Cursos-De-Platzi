/*COERCION

Eisten 2 tipos:

    1-Coercion implicita: se dan cuando el lenguaje nos ayuda y cambia un tipo de valor a otro como por ejemplo 4 * "7" que tendria como resultado 28. A pesar que el "7" sea un string el lenguaje lo cambia a numero y hace la multiplicacion

    2-Coercion explicita: se da cuando nosotros obligamos a que un tipo de valor cambie a otro tipo de valor como por ejemplo de string a valor numerico. Ejemplo:

        var a = 20;      //aqui la variable a es un numero

        var b = String(a);    //la variable "a" pasa a ser un string
        -------------------------------------------------------------

        var d = "20";         //"d" es un string

        var e = Number(d);   //la variable "d" pasa a ser un numero

*/

4 + "7";  //47  --------Concatenacion  (coercion implicita, cambia el 4 a string)

4 * "7";  //28  --------multiplicacion  (coercion implicita, cambia el 7 a valor numerico)

2 + true;  //3  ---------Suma

false - 3;  //-3  --------Resta