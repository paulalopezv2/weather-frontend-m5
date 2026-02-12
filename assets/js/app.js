import { WeatherApp } from "./app/WeatherApp.js";
import { lugares } from "./data/lugares.js";

// ===============================
// INICIO APP (Módulo 5 - Opción A)
// ===============================
const appClima = new WeatherApp(lugares);
appClima.iniciar();

// ===============================
// CLICK: IR A DETALLE
// ===============================
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".place-card__btn");
  if (!btn) return;

  const id = parseInt(btn.dataset.id);
  if (!id) return;

  window.location.href = `detalle.html?id=${id}`;
});


