// assets/js/lugares.js

const lugares = [
  {
    id: 1,
    nombre: "Talca",
    tempActual: 18,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 12, max: 18, estado: "Nublado" },
      { dia: "Martes", min: 11, max: 19, estado: "Soleado" },
      { dia: "Miércoles", min: 10, max: 17, estado: "Lluvioso" },
      { dia: "Jueves", min: 9, max: 16, estado: "Nublado" },
      { dia: "Viernes", min: 10, max: 18, estado: "Soleado" },
      { dia: "Sábado", min: 11, max: 19, estado: "Soleado" },
      { dia: "Domingo", min: 12, max: 20, estado: "Nublado" }
    ]
  },
  {
    id: 2,
    nombre: "Santiago",
    tempActual: 26,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 27, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 28, estado: "Soleado" },
      { dia: "Miércoles", min: 16, max: 26, estado: "Soleado" },
      { dia: "Jueves", min: 15, max: 25, estado: "Nublado" },
      { dia: "Viernes", min: 14, max: 26, estado: "Soleado" },
      { dia: "Sábado", min: 15, max: 27, estado: "Soleado" },
      { dia: "Domingo", min: 16, max: 28, estado: "Soleado" }
    ]
  },
  {
    id: 3,
    nombre: "Temuco",
    tempActual: 14,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      { dia: "Lunes", min: 9, max: 14, estado: "Lluvioso" },
      { dia: "Martes", min: 8, max: 13, estado: "Lluvioso" },
      { dia: "Miércoles", min: 7, max: 12, estado: "Nublado" },
      { dia: "Jueves", min: 8, max: 13, estado: "Lluvioso" },
      { dia: "Viernes", min: 9, max: 14, estado: "Nublado" },
      { dia: "Sábado", min: 10, max: 15, estado: "Soleado" },
      { dia: "Domingo", min: 11, max: 16, estado: "Soleado" }
    ]
  },
  {
    id: 4,
    nombre: "Viña del Mar",
    tempActual: 17,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 13, max: 17, estado: "Nublado" },
      { dia: "Martes", min: 12, max: 16, estado: "Nublado" },
      { dia: "Miércoles", min: 11, max: 16, estado: "Soleado" },
      { dia: "Jueves", min: 12, max: 17, estado: "Soleado" },
      { dia: "Viernes", min: 13, max: 18, estado: "Nublado" },
      { dia: "Sábado", min: 14, max: 19, estado: "Soleado" },
      { dia: "Domingo", min: 15, max: 20, estado: "Soleado" }
    ]
  },
  {
    id: 5,
    nombre: "La Serena",
    tempActual: 21,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 21, estado: "Soleado" },
      { dia: "Martes", min: 14, max: 22, estado: "Soleado" },
      { dia: "Miércoles", min: 13, max: 21, estado: "Nublado" },
      { dia: "Jueves", min: 14, max: 22, estado: "Soleado" },
      { dia: "Viernes", min: 15, max: 23, estado: "Soleado" },
      { dia: "Sábado", min: 16, max: 24, estado: "Soleado" },
      { dia: "Domingo", min: 17, max: 25, estado: "Soleado" }
    ]
  }
];

console.log("lugares cargados:", lugares);
