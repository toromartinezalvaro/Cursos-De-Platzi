/*SCOPE

Es el alcance que tienen las variables. Dependiendo del lugar en el que declares una variable, tendras acceso a la misma desde ciertos puntos y desde otros no

Existen 3 tipos de Scope:

    1-El scope global: en esta caso las variables pueden ser utilizadas desde cualquier parte del codigo. en el scope global van a existir todas las variables, las funciones, las validaciones etc

    2-El scope local: Al momento de declarar una funcion, dentro de esa funcion va a iniciar el llamado scope local, ya que los elementos que creemos dentro de dicha funcion (como por ejemplo variables) solo podran ser usados dentro de la misma funcion y no nse podra acceder a ellos desde afuera de la misma, sin embargo si tenemos funciones anidadas, las funciones hijo podran acceder a los elementos de las funciones padre

    3-Block Scope: se usa declarando las variables con "let", si yo declaro una variable usando "var" en mi codigo y le asigno por ejemplo el numero 5, al momento de modificar ese valor dentro de un bloque (sea un ciclo, una funcion, etc), se modificara tambien fuera de dicho bloque, si en cambio uso la palabra clave "let" en vez de "var" y le asigno el mismo 5 fuera del bloque y dentro del bloque lo cambio por 10, al finalizar el bloque, la variable seguira teniendo el valor de 5 fuera del bloque(el valor solo se cambiara dentro del bloque de la funcion y retomara su valor inicial al salir de dicho bloque). Ejemplo:
        let i = 5;   -----------------Aqui "i" vale 5
        for(let i = 0; i < 10; i++){
            ------Aqui adentro "i" llegara a valer 10 y saldra del ciclo
        }
        -----------fuera del bloque "i" volvera a valer 5

        Nota: las variables con "let" no se elevaran a la parte superior del codigo, las declaradas con "var" si

En conclusion, lo que esta en scope global no podra acceder a los que se encuentra en scope local, sin embargo lo que esta en scope local si podra acceder a lo que se encuentra en scope global.
*/

//Ejemplo:

                    //SCOPE GLOBAL: contiene todo el codigo
var nombre = "diego";

Function fun(){         //SCOPE LOCAL: contiene la funcion "fun"
    var apellido = "Toro";
    return nombre + " " + apellido;
}

    //Nota: como se puede observar, la funcion "fun" puede acceder a la variable "nombre" que esta en el scope global, sin embargo fuera de la funcion "fun"(que genera el scope local) no se podra acceder a la variable apellido, debido a que esta fue creada dentro de dicha funcion. Si por eejemplo yo quisiera crear un console.log que muestre la variable pellido, apareceria que apellido no esta definido ya que hace parte de un scope local (a menos que haga el console.log dentro de la misma funcion)

