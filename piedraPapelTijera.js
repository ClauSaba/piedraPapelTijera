let puntosJugador = 0;
let puntosCompu = 0;

//Captura nombre jugador y muestra nombre y puntajes
let nombre = prompt("Ingrese su nombre");
let muestraNombre = document.createElement("strong");
muestraNombre.innerHTML = `${nombre} - puntos: `;
jugador1.append(muestraNombre);

let muestraPuntosJugador = document.createElement("strong");
muestraPuntosJugador.innerHTML = `${puntosJugador}`;
puntajeJugador.append(muestraPuntosJugador);

let muestraPuntosCompu = document.createElement("strong");
muestraPuntosCompu.innerHTML = `${puntosCompu}`;
puntajeCompu.append(muestraPuntosCompu);

// jugador elige a traves de click una opcion
let eleccionJugador = prompt("1 piedra - 2 papel - 3 tijera");

let piedraJ = document.getElementById("piedraJugador");
piedraJ.addEventListener("mousedown", eligePiedra);
function eligePiedra(){
    eleccionJugador = "1";
    console.log(eleccionJugador);
    piedraJ.className = "seleccionVerde";
}
let piedraQuita = document.getElementById("piedraJugador");
piedraQuita.addEventListener("mouseup", quitaColor);
function quitaColor(){
    piedraQuita.className = "seleccionTransparente";
}

let papelJ = document.getElementById("papelJugador");
papelJ.addEventListener("mousedown", eligePapel);
function eligePapel(){
    eleccionJugador = "2";
    console.log(eleccionJugador);
    papelJ.className = "seleccionVerde";
}
let papelQuita = document.getElementById("papelJugador");
papelQuita.addEventListener("mouseup", quitaColorPapel);
function quitaColorPapel(){
    papelQuita.className = "seleccionTransparente";
}

let tijeraJ = document.getElementById("tijeraJugador");
tijeraJ.addEventListener("mousedown", eligeTijera);
function eligeTijera(){
    eleccionJugador = "3";
    console.log(eleccionJugador);
    tijeraJ.className = "seleccionVerde";
}
let tijeraQuita = document.getElementById("tijeraJugador");
tijeraQuita.addEventListener("mouseup", quitaColorTijera);
function quitaColorTijera(){
    tijeraQuita.className = "seleccionTransparente";
}

// function elegir(){
//     if()
// }

// Compu elige a traves de randon
function eligeCompu(){ 
eleccionCompu = (Math.ceil(Math.random()*3));
console.log(eleccionCompu);
}

//marcador verifica si el juego termino e imprime resultado
function marcador(){
    if(puntosJugador==3){
        let fin = document.createElement("p");
        fin.innerHTML = "GANASTE!!";
        resultado.append(fin);
        resultado.className ="green"
    }else{
        let finDerrota = document.createElement("p");
        finDerrota.innerHTML = "PERDISTE!!"
        resultado.append(finDerrota);
        resultado.className ="red"
    }
}

while (puntosJugador !=3 && puntosCompu !=3){
    eligeCompu();
    eleccionJugador = prompt("1 piedra - 2 papel - 3 tijera");
    // no se como hacer para que me solicite en vez de prompt, por onclick
    if (eleccionCompu == eleccionJugador){
        alert("empate... vamos de vuelta");
    }else if((eleccionJugador == 1 && eleccionCompu == 3) || (eleccionJugador == 2 && eleccionCompu ==1) || (eleccionJugador ==3 && eleccionCompu == 2 )){
        alert("bien, sumas un punto");
        puntosJugador++;
        alert(`Marcador: vos ${puntosJugador} puntos\nla compu: ${puntosCompu} puntos`);
    }else{
        alert("punto para la Compu");
        puntosCompu++;
        alert(`Marcador: vos ${puntosJugador} puntos\nla compu: ${puntosCompu} puntos`);
    }
}
marcador();