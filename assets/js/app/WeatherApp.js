// WeatherApp.js
import { renderCards } from "./ui.js";

export class WeatherApp {
  constructor(lugares = []) {
    this.lugares = lugares;
  }

  iniciar() {
    // 1) pinta las cards en index
    renderCards(this.lugares);
  }
}
