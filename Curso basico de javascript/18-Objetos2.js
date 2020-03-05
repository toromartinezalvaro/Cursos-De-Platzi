//Objetos

//FUNCION CONSTRUCTORA DE OBJETOS

function moto(marca, modelo, annio){   //se agregan los parametros 
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio
}

var miMoto = new moto("tvs", "sport", 2014);    //creando nuevo objeto
var otraMoto = new moto("honda", "XR", 2001);   //creando nuevo objeto


//----------------------------------------------------------------------

    //EXPLICACION(como crear una funcion constructora):
    //Esta funcion sera el "template" de los nuevos objetos
    //creamos una funcion y le agregamos los parametros(marca, modelo, annio) que trendra el objeto que queremos crear (la funcion se llamara como el objeto(moto))
    //dentro de la funcion usaremos la palabra reservada "this" que hace referencia a la funcion/objeto "moto"
    //pondremos un punto que permitira acceder a la propiedad(marca, modelo, etc) del objeto y le asignaremos el parametro correspondiente de la funcion (marca, modelo, etc (los que se encuentran en los parametros de la funcion))

    //EXPLICACION(como llenar cada objeto):
    //declaramos una variable(en este caso miMoto)
    //le asignamos el operador "new" que genera una nueva instancia d ela funcion constructora (crear un objeto que deriva de otro objeto)
    //luego de new pondremos el nombre de la funcion constructora con sus respectivos parentesis"moto()"
    //dentro de los parentesis pondremos las propiedades del nuevo objeto que se asignaran a los parametros de la funcion (en este caso la marca, el modelo y el annio)