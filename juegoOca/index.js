let posicionJugador1 = 0;
let posicionJugador2 = 0;
let turnoJugador1 = true; // alternar turnos

const botonTirarDado = document.querySelector("#tirarDado");
const divPosicionJugador1 = document.querySelector("#posicionJugador1");
const divPosicionJugador2 = document.querySelector("#posicionJugador2");
const divResultadoDado = document.querySelector("#resultadoDado");
const posiciones = [
  {x:743 , y:571 },
  {x:750 , y:506 },
  {x:757 , y:437 },
  {x:765 , y:381 },
  {x:769 , y:318 },
  {x:778 , y:248 },
  {x:851, y:242 },
  {x:928 , y:246 },
  {x:988 , y:242 },
  {x:1048 , y:245 },
  {x:1114 , y:247 },
  {x:1195 , y:252 },
  {x:1201 , y:297 },
  {x:1215 , y:364 },
  {x:1218 , y:449 },
  {x:1221 , y:532 },
  {x:1128 , y:539 },
  {x:1036 , y:539 },
  {x:942 , y:536 },
  {x:861 , y:536 },
  {x:833 , y:468 },
  {x:838 , y:389 },
  {x:843 , y:304 },
  {x:910 , y:294 },
  {x:981 , y:286 },
  {x:1047 , y:296 },
  {x:1126 , y:293 },
  {x:1128 , y:350 },
  {x:1130 , y:392 },
  {x:1125 , y:439 },
  {x:1048 , y:439 },
  {x:983 , y:458 },
  {x:914 , y:436 },
  {x:911 , y:377 },
  {x:978 , y:377 },
  {x:1048 , y:377 },
];
// Actualiza texto inicial
actualizarPosiciones();



botonTirarDado.addEventListener("click", tirarDado);

function tirarDado() {
  // Generar número aleatorio entre 1 y 6
  const dado = Math.floor(Math.random() * 6) + 1;

  if (turnoJugador1) {

    posicionJugador1 += dado;

    //son las 36 casillas que tiene mi tablero

    if (posicionJugador1 > 36){
        posicionJugador1 = 36;
        divResultadoDado.textContent = `Jugador 1 sacó un ${dado}`;
    }

  } else {

    posicionJugador2 += dado;

    if (posicionJugador2 > 36){

        posicionJugador2 = 36;
        divResultadoDado.textContent = `Jugador 2 sacó un ${dado}`;

    } 
  }

  // Mostrar posiciones actualizadas
  actualizarPosiciones();

  // Verificar si alguien ganó
  if (posicionJugador1 === 36) {

    divResultadoDado.textContent = "🎉 ¡Jugador 1 ha ganado!";
    botonTirarDado.disabled = true;

  } else if (posicionJugador2 === 36) {
    divResultadoDado.textContent = "🎉 ¡Jugador 2 ha ganado!";
    botonTirarDado.disabled = true;
    
  }

  // Cambiar turno, le digo que es para el siguiente jugador
  turnoJugador1 = !turnoJugador1;
}

function actualizarPosiciones() {

  divPosicionJugador1.innerHTML = `<h2 id="dadoJugador1">${posicionJugador1}</h2>`;
  divPosicionJugador2.innerHTML = `<h2 id="dadoJugador2">${posicionJugador2}</h2>`;

}

function moverFicha(jugador, posicion) {
  const ficha1 = document.querySelector(`#fichaJugador1`);
  const ficha2 = document.querySelector(`#fichaJugador2`);

  const casilla = posiciones[posicion - 1]; // array empieza en 0
  ficha.style.left = `${casilla.x}%`;
  ficha.style.top = `${casilla.y}%`;
}
