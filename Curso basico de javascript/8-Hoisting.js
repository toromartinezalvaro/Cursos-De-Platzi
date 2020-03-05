/* HOISTING

En JavaScript, una variable se puede declarar después de que se haya utilizado.En otras palabras; una variable se puede usar antes de que se haya declarado.

El levantamiento (hoisting) es el comportamiento predeterminado de JavaScript de mover todas las declaraciones a la parte superior del alcance actual (a la parte superior del script actual o la función actual).

Se habla de Hoisting cuando se declaran las variables y/o las funciones antes de que se procese cualquier tipo de codigo

NOTA: El hoisting solo sucede en versiones anteriores de javascript (emma script 5 y versiones anteriores) ya que este solo sucede con variable y funcion (no pasa con let ni cons)

Hoisting es muy diferente a hosting, el hosting es cuando vas a pagar un dominio, hoisting es cuando las variales y funciones se procesan antes de que se ejecute cualquier linea de codigo

*/

//EJEMPLO 1 (VARIABLE):
    var miNombre; 

    console.log(miNombre);   //hoisting, se llama la variable sin inicializarla, por lo cual esta se auto-declara y se le asigna el valor "undefined"

    miNombre = "alvaro";     //aqui se le asigna el valor "alvaro"



//EJEMPLO 2 (FUNCION):

    var nombre = "alvaro";
    fun();

    function fun(){
        console.log("hola " + nombre);
    }

        //en este ejemplo se ejectara bien el codigo ya que a diferencia de las variables, las funciones se pasan a la parte de arriba y se ejecutan antes que el resto de codigo (el resultado sera "hola alvaro"), la razon por la cual se declara la funcion antes de llamarla es por buenas practicas, pero si no se hace, no generara un error

//PARA EVITAR EL HOISTING SE DEBEN DCLARAR TODAS LAS VARIABLES Y LAS FUNCIONES AL COMIENZO DEL CODIGO PARA EVITAR LLAMARLAS ANTES DE HABERLAS DECLARADO
