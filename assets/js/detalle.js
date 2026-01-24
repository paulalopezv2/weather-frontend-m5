console.log("detalle.js cargado");

//  1) Función arriba (más claro)
function iconoPorEstado(estado) {
  if (estado === "Soleado") return "☀️";
  if (estado === "Nublado") return "☁️";
  if (estado === "Lluvioso") return "🌧️";
  return "🌤️";
}

// 2) Leer id
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
console.log("id recibido:", id);

// 3) Buscar lugar
const lugar = obtenerLugarPorId(id);
console.log("lugar encontrado:", lugar);

// 4) Elementos del DOM (básicos)
const elName = document.querySelector("#cityName");
const elTemp = document.querySelector("#cityTemp");
const elState = document.querySelector("#cityState");

// 5) Si faltan IDs, no seguimos
if (!elName || !elTemp || !elState) {
  console.log(" Faltan IDs en detalle.html (cityName/cityTemp/cityState)");
} else if (!lugar) {
  //  6) Si no existe el lugar, mostramos error
  elName.textContent = "Ciudad no encontrada";
  elTemp.textContent = "--°C";
  elState.textContent = "";
  console.log(" No se encontró lugar con ese id");
} else {
  // 7) Pintar datos principales
  elName.textContent = lugar.nombre;
  elTemp.textContent = `${lugar.tempActual}°C`;
  elState.textContent = lugar.estadoActual;
  console.log(" Pintado en pantalla");

  // =========================
  //  PRONÓSTICO SEMANAL
  // =========================
  const weekly = document.querySelector("#weekly");

  if (!weekly) {
    console.log("No existe el contenedor #weekly en detalle.html");
  } else {
    weekly.innerHTML = ""; // limpiar

    for (let i = 0; i < lugar.pronosticoSemanal.length; i++) {
      const dia = lugar.pronosticoSemanal[i];

      weekly.innerHTML += `
        <div class="col">
          <div class="card p-2 text-center shadow-sm">
            <div style="font-size: 24px;">${iconoPorEstado(dia.estado)}</div>
            <div class="fw-bold">${dia.dia}</div>
            <div class="small">${dia.min}° / ${dia.max}°</div>
            <div class="small text-muted">${dia.estado}</div>
          </div>
        </div>
      `;

      console.log("día pintado:", dia.dia, dia.min, dia.max, dia.estado);
    }
  }

  // =========================
  //  ESTADÍSTICAS DE LA SEMANA
  // =========================
  const estadisticas = calcularEstadisticas(lugar.pronosticoSemanal);
  console.log("estadísticas:", estadisticas);

  const statTemp = document.querySelector("#statTemp");
  const statDias = document.querySelector("#statDias");
  const statResumen = document.querySelector("#statResumen");

  if (!statTemp || !statDias || !statResumen) {
    console.log(" Faltan IDs de estadísticas (statTemp/statDias/statResumen)");
  } else {
    // 1) Temperaturas
    statTemp.textContent =
      `Temp mínima: ${estadisticas.minSemana}°C | ` +
      `Temp máxima: ${estadisticas.maxSemana}°C | ` +
      `Promedio: ${estadisticas.promSemana.toFixed(1)}°C`;

    // 2) Conteo por clima
    let textoDias = "Días por tipo de clima: ";
    for (let estado in estadisticas.conteoEstados) {
      textoDias += `${estado}: ${estadisticas.conteoEstados[estado]}  `;
    }
    statDias.textContent = textoDias;

    // 3) Resumen
    statResumen.textContent = estadisticas.resumen;
  }
}
