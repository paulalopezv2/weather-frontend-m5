# App de Clima – Módulo 4

Proyecto Front-End que extiende la App de Clima del módulo anterior,
enfocado en lógica y estadísticas con JavaScript.

## Descripción
La aplicación muestra un listado de ciudades con su clima actual (Home)
y una vista de detalle por ciudad con pronóstico semanal y estadísticas
calculadas dinámicamente en JavaScript.

## Estructura de Datos
Los datos de clima están definidos en un arreglo de objetos (`lugares`)
dentro de `assets/js/lugares.js`.

Cada lugar contiene:
- id
- nombre
- tempActual
- estadoActual
- pronosticoSemanal (arreglo de días con min, max y estado)

## Funcionalidades
- Home dinámico con tarjetas de ciudades.
- Navegación a detalle por `id`.
- Pronóstico semanal renderizado desde JS.
- Estadísticas de la semana:
  - Temperatura mínima, máxima y promedio.
  - Conteo de días por tipo de clima.
  - Resumen automático (ej: “Semana mayormente soleada”).

##  Tecnologías
- HTML5
- CSS3 (SASS compilado)
- JavaScript (ES6)
- Bootstrap 5

##  Uso
Abrir `index.html` en un navegador y seleccionar una ciudad.

##  Autora
Paula López
