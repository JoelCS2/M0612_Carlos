let posicionJugador1 = 0;
let posicionJugador2 = 0;
let turnoJugador1 = true; // alternar turnos

const botonTirarDado = document.querySelector("#tirarDado");
const divPosicionJugador1 = document.querySelector("#posicionJugador1");
const divPosicionJugador2 = document.querySelector("#posicionJugador2");
const divResultadoDado = document.querySelector("#resultadoDado");

// Actualiza texto inicial
actualizarPosiciones();


document.addEventListener("mousemove", function(e){

    console.log("X: ", e.clientX, "Y: ", e.clientY); //coordenadas del mouse

});


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

  divPosicionJugador1.innerHTML = `<h2>Jugador 1: ${posicionJugador1}</h2>`;
  divPosicionJugador2.innerHTML = `<h2>Jugador 2: ${posicionJugador2}</h2>`;

}
