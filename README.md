🌤️ Portafolio Clima – Módulo 5


Proyecto desarrollado en el Módulo 5 del curso Front-End, enfocado en JavaScript intermedio, manipulación del DOM y organización modular del código.

Esta aplicación muestra el clima actual de distintas ciudades y permite acceder a una vista detallada con su pronóstico semanal y estadísticas calculadas dinámicamente.



📚 Contenidos aplicados del módulo

En este proyecto se trabajó:

Uso de objetos y arrays en JavaScript

Modularización del código en archivos separados 

Manipulación del DOM

Uso de parámetros en la URL (?id=) para renderizado dinámico

Cálculo de estadísticas semanales (mínimos, máximos y promedios)

Organización del proyecto por carpetas

Uso de SASS con archivos parciales

Integración con Bootstrap 5

Renderizado dinámico de contenido con JavaScript



🧠 ¿Qué hace la aplicación?

Muestra tarjetas con el clima actual de distintas ciudades.

Permite acceder a una vista detalle de cada ciudad.

En la vista detalle se muestra:

Temperatura actual

Estado del clima

Pronóstico semanal

Estadísticas calculadas automáticamente



📊 Cálculo de estadísticas

Las estadísticas semanales se calculan recorriendo el array pronosticoSemanal de cada ciudad:

🔹 Temperatura mínima: se obtiene comparando todos los valores min del pronóstico.

🔹 Temperatura máxima: se obtiene comparando todos los valores max.

🔹 Promedio semanal: se calcula sumando las temperaturas máximas y dividiéndolas por la cantidad de días.

Estos cálculos se realizan dinámicamente mediante métodos de JavaScript como forEach y operaciones matemáticas básicas.



🗂️ Estructura del proyecto
assets/
│
├── js/
│   ├── lugares.js      
│   ├── app.js          
│   └── detalle.js      
│
├── scss/               
│
dist/
└── css/
    └── main.css        
│
index.html
detalle.html


🧩 Estructura lógica del proyecto

El proyecto está organizado de forma modular:

lugares.js: contiene los datos estructurados de cada ciudad en forma de objetos.

app.js: se encarga de renderizar dinámicamente las tarjetas en la vista principal.

detalle.js: obtiene el ID desde la URL, busca la ciudad correspondiente y genera la vista detalle junto con los cálculos estadísticos.



🌐 API utilizada

En esta versión del proyecto no se utiliza una API externa real.
Los datos del clima están simulados mediante objetos JavaScript para trabajar la lógica, estructura y manipulación dinámica del contenido.



🎨 Diseño

El diseño fue personalizado con estilo pastel y fondo de nubes, manteniendo coherencia visual entre la vista principal y la vista detalle.
Se utilizó Bootstrap 5 para la estructura base y SASS para la personalización de estilos.

👩🏻‍💻 Autora

Paula López

🔗 Enlace al repositorio público

https://github.com/paulalopezv2/weather-frontend-m5