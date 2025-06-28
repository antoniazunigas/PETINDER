// Importamos los decoradores y herramientas necesarias
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Este decorador hace que el servicio esté disponible a nivel global (en toda la app)
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // 🔑 Clave de acceso para autenticarte en la API de GNews (reemplaza con la tuya si cambia)
  private apiKey = '1b62898079d52bb15ed0bba4f2636797';

  // 🌐 URL base de la API de GNews para hacer búsquedas
  private baseUrl = 'https://gnews.io/api/v4/search';

  // Inyectamos el cliente HTTP para hacer peticiones a APIs externas
  constructor(private http: HttpClient) {}

  // 📥 Método que obtiene noticias relacionadas con adopción y protección animal
  obtenerNoticias() {
    // 🧠 Creamos la URL con los parámetros de búsqueda: palabras clave, idioma, país y cantidad máxima
    const url = `${this.baseUrl}?q=adopción animal OR protección animal&lang=es&country=cl&max=10&token=${this.apiKey}`;

    // 🚀 Retornamos un Observable con la respuesta de la API
    return this.http.get(url);
  }
}



