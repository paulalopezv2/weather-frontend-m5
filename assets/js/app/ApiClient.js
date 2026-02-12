// ApiClient.js

export class ApiClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  }

  async obtenerClima(ciudad) {
    const url = `${this.baseUrl}?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener el clima");
    }

    return await response.json();
  }
}
