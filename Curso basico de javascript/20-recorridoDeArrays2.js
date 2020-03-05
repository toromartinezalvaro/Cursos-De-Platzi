//RECORRIDO DE ARRAYS 2


    //METODO 3 ".find()": valida true o false, solo retorna si es true

    var articulos = [   //esto es un array que contiene objetos
        { nombre: "bici", costo: 3000 },
        { nombre: "tv", costo: 2500 },
        { nombre: "libro", costo: 320 },
        { nombre: "celular", costo: 10000 },
        { nombre: "laptop", costo: 20000 },
        { nombre: "teclado", costo: 500 },
        { nombre: "audifonos", costo: 1700 },
    ];

    var encuentraArticulo = articulos.find(function(articulo){
        return articulo.nombre === "laptop";
    });

    encuentraArticulo //llamando el array

        //NOTA: .find() devuelve el objeto completo que cumpla con la condicion solicitada, en este ejemplo retornara "{ nombre: "laptop", costo: 20000 }"

    
    //--------------------------------------------------------------------


    //METODO 4 ".forEach();": Este metodo NO genera un nuevo array, solo filtra solo el array sin modificarlo

    var articulos = [   //esto es un array que contiene objetos
        { nombre: "bici", costo: 3000 },
        { nombre: "tv", costo: 2500 },
        { nombre: "libro", costo: 320 },
        { nombre: "celular", costo: 10000 },
        { nombre: "laptop", costo: 20000 },
        { nombre: "teclado", costo: 500 },
        { nombre: "audifonos", costo: 1700 },
    ];

    articulos.forEach(function(articulo){
        console.log(articulo.nombre);
    });

    //esto imprimira en consola los nombres de cada objeto del array "articulos"

        //NOTA: Como .forEach(); no genera un nuevo array, no se asigna a ninguna variable sino que se usa directamente ya que no se guardan los datos, solo los muestra

    
    //------------------------------------------------------------------


    //METODO 5 ".some();": valida true o false, revisa la condicion impuesta en la funcion y si se cumple en alguna parte retorna un "true" si no, un "false"

    var articulos = [   //esto es un array que contiene objetos
        { nombre: "bici", costo: 3000 },
        { nombre: "tv", costo: 2500 },
        { nombre: "libro", costo: 320 },
        { nombre: "celular", costo: 10000 },
        { nombre: "laptop", costo: 20000 },
        { nombre: "teclado", costo: 500 },
        { nombre: "audifonos", costo: 1700 },
    ];

    var articulosBaratos = articulos.some(function(articulo){
        return articulo.costo <= 700;
    });

    articulosBaratos   //Retornaria "true" ya que si existen articulos que valen 700 o menos, no retorna cuales son esos articulos, solo "true"