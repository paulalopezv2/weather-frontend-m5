// utils.js
// Funciones de ayuda reutilizables

export function formatearTemperatura(temp) {
  return `${Math.round(temp)}°C`;
}

export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
