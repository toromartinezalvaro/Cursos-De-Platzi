//Metodos de contenido de Arrays

//.filter();    ---------devuelve objetos completos

//.map();       ---------devuelve solo los datos solicitados en strings

//.find();      ---------true o false solo si existe lo regresa

//.forEach();   ---------Este metodo NO genera un nuevo array, solo filtra solo el array sin modificarlo

//.some();      ---------valida true o false, revisa la condicion impuesta en la funcion y si se cumple en alguna parte retorna un "true" si no, un "false"



    //NOTA:estos metodos no modifican los arrays que ya existen sino que crean uno nuevo

    //METODO 1 ".filter()": DEVUELVE EL OBJETO COMPLETO

    var articulos = [   //esto es un array que contiene objetos
        { nombre: "bici", costo: 3000 },
        { nombre: "tv", costo: 2500 },
        { nombre: "libro", costo: 320 },
        { nombre: "celular", costo: 10000 },
        { nombre: "laptop", costo: 20000 },
        { nombre: "teclado", costo: 500 },
        { nombre: "audifonos", costo: 1700 },
    ];

    var articulosFiltrados = articulos.filter(function(articulo){
        return articulo.costo <= 500;
    });

    articulosFiltrados //es un nuevo array que contiene los objetos que valen 500 o menos

        //Resultado:
        //{nombre: "libro", costo: 320}
        //{nombre: "teclado", costo: 500}


    /*Existen diferentes metodos:

        -filter(): valida si algo es verdadero o falso y lo almacena en un nuevo array sin sacar el elemento del anterior array. En el anterior ejemplose usa una funcion dentro de los parentesis del filter() que obtendra los datos del array articulo y esta funcion tiene un return que devolvera todos los articulos cuyo costo sea menor o igual a 500 (return articulo.costo <= 500;)

        Nota: .filter() no modifica el array que ya existe, filter crea un nuevo array con los objetos que cumpl la condicion impuesta
    */


    //METODO 2 ".map()": DEVUELVE STRINGS CON LOS DATOS SOLICITADOS

    //Ayuda a mapear ciertos articulo, .map tambien crea un nuevo array, Ejemplo:

    var articulos = [   //esto es un array que contiene objetos
        { nombre: "bici", costo: 3000 },
        { nombre: "tv", costo: 2500 },
        { nombre: "libro", costo: 320 },
        { nombre: "celular", costo: 10000 },
        { nombre: "laptop", costo: 20000 },
        { nombre: "teclado", costo: 500 },
        { nombre: "audifonos", costo: 1700 },
    ];

    var nombreArticulos = articulos.map(function(articulo){
        return articulo.nombre;
    });

    nombreArticulos  //llamando a el nuevo array "nombreArticulos"

        //Resultado
        ["bici", "tv", "libro", "celular", "laptop", "teclado", "audifonos"]

    //.map() recorre todos los dtos del array y nos trae los elementos que nosotros solicitamos, en este caso el nombre de todos los objetos. A diferencia de filter, no trae todos los datos del objeto que cumple la condicion, sino que solo trae los valores que estan asignados a el dato que solicitamos