/* Reloj - Dificultad:  🟢🟡

4- Crear una web con un reloj que muestre la siguiente información:
*/

function obtenerFechaHora() {
    let fechaActual = new Date();

    let fecha = document.getElementById("fecha");
    let horaMin = document.getElementById("horaMin");
    // let momento = document.getElementById("momento");

    // let segundos = document.getElementById("segundos");

    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} ${monthsOfYear[fechaActual.getMonth()]} ${fechaActual.getFullYear()}`

    let horaActual = fechaActual.getHours(),
        minutosActuales = fechaActual.getMinutes(),
        segundosActuales = fechaActual.getSeconds(),
        momentoActual = (horaActual === 0 - 11) ? "AM" : "PM";

    if (minutosActuales < 10) {
        minutosActuales = '0' + minutosActuales;
    }

    if (horaActual < 10) {
        horaActual = '0' + horaActual;
    }

    if (segundosActuales < 10) {
        segundosActuales = '0' + segundosActuales;
    }

    console.log(momentoActual);


    horaMin.innerHTML = `${horaActual}:${minutosActuales}: ${segundosActuales} ${momentoActual}`;
}


setInterval(obtenerFechaHora, 1000);

