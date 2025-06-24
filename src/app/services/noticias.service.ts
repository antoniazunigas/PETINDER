import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiKey = '1b62898079d52bb15ed0bba4f2636797';
  private baseUrl = 'https://gnews.io/api/v4/search';

  constructor(private http: HttpClient) {}

  obtenerNoticias() {
    const url = `${this.baseUrl}?q=adopción animal OR protección animal&lang=es&country=cl&max=10&token=${this.apiKey}`;
    return this.http.get(url);
  }
}


