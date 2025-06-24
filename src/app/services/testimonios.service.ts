import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Testimonio {
  id?: number;
  nombre: string;   // Nombre de la persona
  comentario: string;  // Texto del testimonio
}

@Injectable({
  providedIn: 'root',
})
export class TestimoniosService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';  // Usa la API o la que quieras

  constructor(private http: HttpClient) {}

  obtenerTestimonios(): Observable<Testimonio[]> {
    return this.http.get<Testimonio[]>(this.API_URL);
  }

  agregarTestimonio(data: Testimonio): Observable<Testimonio> {
    return this.http.post<Testimonio>(this.API_URL, data);
  }

  editarTestimonio(id: number, data: Testimonio): Observable<Testimonio> {
    return this.http.put<Testimonio>(`${this.API_URL}/${id}`, data);
  }

  eliminarTestimonio(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}



