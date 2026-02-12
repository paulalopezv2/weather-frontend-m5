// ui.js
import { formatearTemperatura, capitalizar } from "./utils.js";

/* ===============================
   1) Mostrar clima (detalle o sección clima)
=============================== */
export function mostrarClima(clima) {
  const contenedor = document.getElementById("clima");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="card p-3 pastel-card">
      <h3>${clima.name}</h3>
      <p>${capitalizar(clima.weather[0].description)}</p>
      <strong>${formatearTemperatura(clima.main.temp)}</strong>
    </div>
  `;
}

/* ===============================
   2) Cards de lugares (Index)
=============================== */
function iconoPorEstado(estado) {
  if (estado === "Soleado") return "☀️";
  if (estado === "Nublado") return "☁️";
  if (estado === "Lluvioso") return "🌧️";
  return "🌤️";
}

export function renderCards(lugares) {
  const contenedor = document.querySelector("#cardsContainer");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  for (let i = 0; i < lugares.length; i++) {
    const lugar = lugares[i];

    contenedor.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="place-card">
          <div class="place-card__icon">${iconoPorEstado(lugar.estadoActual)}</div>
          <h3 class="place-card__name">${lugar.nombre}</h3>
          <p class="place-card__meta">${lugar.tempActual}°C • ${lugar.estadoActual}</p>
          <button class="place-card__btn" data-id="${lugar.id}">Ver detalle</button>
        </div>
      </div>
    `;
  }
}
