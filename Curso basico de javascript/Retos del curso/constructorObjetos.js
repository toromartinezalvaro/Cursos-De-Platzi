var marcaNueva;
var modeloNuevo;
var annioNuevo;
var carros= [];

function carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


for(var i = 1; i >= 30; i++){
    marcaNueva = "marca " + i;
    modeloNuevo = "modelo " + i;
    annioNuevo = "annio " + i;
    var carroNuevo = new carro(marcaNueva, modeloNuevo, annioNuevo);
    carros.push(carroNuevo);
}

console.log(carros);