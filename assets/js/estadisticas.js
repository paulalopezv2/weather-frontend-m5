/*funcion para buscar lugar*/


function obtenerLugarPorId(id) {
  for (let i = 0; i < lugares.length; i++) {
    if (lugares[i].id === id) {
      return lugares[i];
    }
  }
  return null;
}

/*calcular estadísticas de pronostico semanal*/

function calcularEstadisticas(pronosticoSemanal) {
  let minSemana = pronosticoSemanal[0].min;
  let maxSemana = pronosticoSemanal[0].max;

  let sumaPromediosDia = 0;

  // conteo por estado 
  let conteoEstados = {};

  for (let i = 0; i < pronosticoSemanal.length; i++) {
    // 1) min y max
    if (pronosticoSemanal[i].min < minSemana) {
      minSemana = pronosticoSemanal[i].min;
    }
    if (pronosticoSemanal[i].max > maxSemana) {
      maxSemana = pronosticoSemanal[i].max;
    }

    // 2) promedio semanal 
    let promedioDia = (pronosticoSemanal[i].min + pronosticoSemanal[i].max) / 2;
    sumaPromediosDia = sumaPromediosDia + promedioDia;

    // 3) contar estados
    let estado = pronosticoSemanal[i].estado;
    if (conteoEstados[estado] === undefined) {
      conteoEstados[estado] = 1;
    } else {
      conteoEstados[estado] = conteoEstados[estado] + 1;
    }

    // console por item (como te gusta para revisar paso a paso)
    console.log("dia procesado:", pronosticoSemanal[i].dia, "min:", pronosticoSemanal[i].min, "max:", pronosticoSemanal[i].max, "estado:", estado);
  }

  let promSemana = sumaPromediosDia / pronosticoSemanal.length;

  // 4) resumen simple (comparación entre 2 estados típicos)
  let diasSoleados = conteoEstados["Soleado"] || 0;
  let diasNublados = conteoEstados["Nublado"] || 0;
  let diasLluviosos = conteoEstados["Lluvioso"] || 0;

  let resumen = "Semana variada.";
  if (diasSoleados > diasNublados && diasSoleados > diasLluviosos) {
    resumen = "Semana mayormente soleada.";
  } else if (diasLluviosos > diasSoleados) {
    resumen = "Semana con varias lluvias.";
  } else if (diasNublados > diasSoleados) {
    resumen = "Semana mayormente nublada.";
  }

  return {
    minSemana: minSemana,
    maxSemana: maxSemana,
    promSemana: promSemana,
    conteoEstados: conteoEstados,
    resumen: resumen
  };
}
