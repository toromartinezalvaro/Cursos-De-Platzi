let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";
let computadora = "piedra";
let decision;

function jugar (decision){
    if(decision === computadora){
        console.log("es un empate");
    } else if (decision === piedra && computadora === papel){
        console.log("Perdiste");
    } else if (decision === piedra && computadora === tijera){
        console.log("Ganaste!");
    } else if (decision === papel && computadora === piedra){
        console.log("Ganaste!");
    } else if (decision === papel && computadora === tijera){
        console.log("Perdiste");
    } else if (decision === tijera && computadora === piedra){
        console.log("Perdiste");
    } else if (decision === tijera && computadora === papel){
        console.log("Ganaste!");
    } else{
        console.log("La opción que elegiste no existe");
    }  
}

jugar(papel);