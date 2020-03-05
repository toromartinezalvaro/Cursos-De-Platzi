let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";
let computadora = "piedra";
let decision;
let caso;


if(decision === computadora){
    caso = 0.5;
} else if (decision === piedra && computadora === papel || decision === tijera && computadora === piedra || decision === papel && computadora === tijera){
    caso = 0;
} else if (decision === piedra && computadora === tijera || decision === papel && computadora === piedra || decision === tijera && computadora === papel){
    caso = 1;
} else{
    console.log("La opción que elegiste no existe");
} 

switch (caso){
    case 0.5:
        console.log("es un empate");
        break;
    case 1:
        console.log("ganaste");
        break;
    case 0:
        console.log("perdiste");
        break;
    default:
        console.log("La opcion que elegiste no existe")
}