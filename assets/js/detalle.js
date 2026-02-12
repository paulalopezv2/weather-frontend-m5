import { lugares } from "./data/lugares.js";

// 1) leer id desde la URL: detalle.html?id=1
function obtenerIdDesdeUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return id;
}

// 2) icono según estado
function iconoPorEstado(estado) {
  if (estado === "Soleado") return "☀️";
  if (estado === "Nublado") return "☁️";
  if (estado === "Lluvioso") return "🌧️";
  return "🌤️";
}

// 3) pintar detalle
function renderDetalle(lugar) {
  const cityName = document.getElementById("cityName");
  const cityTemp = document.getElementById("cityTemp");
  const cityState = document.getElementById("cityState");
  const cityIcon = document.getElementById("cityIcon");
  const weekly = document.getElementById("weekly");
  const stats = document.getElementById("stats");

  if (!cityName || !cityTemp || !cityState || !cityIcon || !weekly || !stats) {
    console.error("Faltan IDs en detalle.html (cityName, cityTemp, cityState, cityIcon, weekly, stats)");
    return;
  }

  // Datos principales
  cityName.textContent = lugar.nombre;
  cityTemp.textContent = `${lugar.tempActual}°C`;
  cityState.textContent = lugar.estadoActual;
  cityIcon.textContent = iconoPorEstado(lugar.estadoActual);

  // Pronóstico semanal
  weekly.innerHTML = "";

  for (let i = 0; i < lugar.pronosticoSemanal.length; i++) {
    const dia = lugar.pronosticoSemanal[i];

    weekly.innerHTML += `
      <div class="col">
        <div class="card p-3 rounded-4 shadow-sm h-100 text-center">
          <div class="fs-3 mb-1">${iconoPorEstado(dia.estado)}</div>
          <div class="fw-bold">${dia.dia}</div>
          <div class="text-muted small mb-2">${dia.estado}</div>
          <div>
            <span class="fw-bold">${dia.max}°</span>
            <span class="text-muted"> / ${dia.min}°</span>
          </div>
        </div>
      </div>
    `;
  }

  // Estadísticas (simple y bonito)
  const mins = lugar.pronosticoSemanal.map((d) => d.min);
  const maxs = lugar.pronosticoSemanal.map((d) => d.max);

  const minSemana = Math.min(...mins);
  const maxSemana = Math.max(...maxs);
  const promMin = Math.round(mins.reduce((a, b) => a + b, 0) / mins.length);
  const promMax = Math.round(maxs.reduce((a, b) => a + b, 0) / maxs.length);

  stats.innerHTML = `
    <h4 class="fw-bold mb-2">Estadísticas de la semana</h4>
    <ul class="mb-0">
      <li><strong>Mínima más baja:</strong> ${minSemana}°</li>
      <li><strong>Máxima más alta:</strong> ${maxSemana}°</li>
      <li><strong>Promedio mínimas:</strong> ${promMin}°</li>
      <li><strong>Promedio máximas:</strong> ${promMax}°</li>
    </ul>
  `;
}

// 4) pintar error
function renderError() {
  const cityName = document.getElementById("cityName");
  const cityTemp = document.getElementById("cityTemp");
  const cityState = document.getElementById("cityState");
  const cityIcon = document.getElementById("cityIcon");
  const weekly = document.getElementById("weekly");
  const stats = document.getElementById("stats");

  if (cityName) cityName.textContent = "Ciudad no encontrada";
  if (cityTemp) cityTemp.textContent = "--";
  if (cityState) cityState.textContent = "Vuelve al Home y elige una ciudad";
  if (cityIcon) cityIcon.textContent = "⚠️";
  if (weekly) weekly.innerHTML = "";
  if (stats) stats.innerHTML = "<p class='mb-0'>Sin estadísticas disponibles.</p>";
}

// INIT
const id = obtenerIdDesdeUrl();
const lugar = lugares.find((l) => l.id === id);

if (!id || !lugar) {
  renderError();
} else {
  renderDetalle(lugar);
}
