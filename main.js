let turno = 1;

function actualizarTurno() {
    const turnoDisplay = document.getElementById("numero-turno");
    turnoDisplay.textContent = turno.toString().padStart(2, "0");
}

function habilitarBotones() {
    const botonAnterior = document.getElementById("Anterior");
    const botonSiguiente = document.getElementById("Siguiente");
    
    botonAnterior.disabled = turno <= 1;
    botonSiguiente.disabled = turno >= 99;
}

function cambiarTurno() {
    const nuevoTurnoInput = document.getElementById("nuevoTurno");
    const nuevoTurno = parseInt(nuevoTurnoInput.value);
    if (!isNaN(nuevoTurno) && nuevoTurno >= 1 && nuevoTurno <= 99) {
        turno = nuevoTurno;
        actualizarTurno();
        habilitarBotones();
    }
    nuevoTurnoInput.value = "";
}

const botonSiguiente = document.getElementById("Siguiente");
botonSiguiente.addEventListener("click", () => {
    if (turno < 99) {
        turno++;
        actualizarTurno();
        habilitarBotones();
    }
});

const botonAnterior = document.getElementById("Anterior");
botonAnterior.addEventListener("click", () => {
    if (turno > 1) {
        turno--;
        actualizarTurno();
        habilitarBotones();
    }
});

const nuevoTurnoInput = document.getElementById("nuevoTurno");
nuevoTurnoInput.addEventListener("change", cambiarTurno);

const botonCambiarTurno = document.getElementById("CambiarTurno");
botonCambiarTurno.addEventListener("click", cambiarTurno);

actualizarTurno();
habilitarBotones();