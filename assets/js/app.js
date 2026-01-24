// bloque click

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".place-card__btn");
  if (!btn) return;

  const id = parseInt(btn.dataset.id);
  if (!id) return;

  window.location.href = `detalle.html?id=${id}`;
});


// TEST 
console.log("lugares disponibles:", lugares);

const lugarPrueba = obtenerLugarPorId(1);
console.log("lugarPrueba:", lugarPrueba);

const stats = calcularEstadisticas(lugarPrueba.pronosticoSemanal);
console.log("stats:", stats);




// Funcion que pinta las cards desde lugares

const contenedor = document.querySelector("#cardsContainer");

function iconoPorEstado(estado) {
  if (estado === "Soleado") return "☀️";
  if (estado === "Nublado") return "☁️";
  if (estado === "Lluvioso") return "🌧️";
  return "🌤️";
}

function renderCards() {
  contenedor.innerHTML = ""; // limpiar

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

  console.log("cards renderizadas:", lugares.length);
}

renderCards();
