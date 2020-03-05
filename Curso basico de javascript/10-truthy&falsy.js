// Valores Truthy and Falsy
/*
se trata de saber que tipo de valor es verdadero y que tipo de valor es falso, los valores por default son verdaderos o falsos. Para saber cuales son verdaderos y cuales son falsos podemos usar la funcion "boolean();" dentro de esta escribiremos el valor y nos dira si es verdadero o falso. Ejemplo:

    FALSOS:

    boolean();              si esta vacio es falso
    boolean(0);             falso
    boolean(null);          falso
    boolean(NaN);           falso (Not a Number)
    boolean(undefined);     falso
    boolean(false);         falso
    boolean("");            falso


    VERDADEROS:
    boolean(1);             verdadero (cualquier numero => 1)
    boolean(" ");           cualquier string que contenga algo (espacio)
    boolean("a");           ""      ""      ""      ""      ""  (a)
    boolean(true);          verdadero
    boolean([]);            cualquier Array sin importar que este vacio
    boolean({});            cualquier Objeto sin importar que este vacio
    boolean(function(){});  cualquier funcion es verdadera
*/