import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders  } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'; // Cambia según tu configuración

  constructor(private http: HttpClient) {}

  // Método para registrar un cliente
  registerCliente(cliente: any): Observable<any> {
    this.getCsrfToken();
    return this.http.post(`${this.apiUrl}/cliente/register`, cliente, {
      withCredentials: true, // Esto asegura que las cookies sean enviadas
    });
  }

  checkEmailExists(correo: string): Observable<boolean> {
    return this.http.post<{ exists: boolean }>(`${this.apiUrl}/cliente/check-email`, { correo }).pipe(
      // Extrae el valor booleano `exists` de la respuesta del servidor
      map((response) => response.exists)
    );
  }

  getClienteProfile(): Observable<any> {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Agrega el token al encabezado
    });

    return this.http.get(`${this.apiUrl}/cliente/profile`, { headers });
  }


  updateClienteProfile(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/cliente/profile`, data);
  }

  loginCliente(credentials: { correo: string; contra: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/cliente/login`, credentials);
  }

  getCsrfToken(): Observable<any> {
    return this.http.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
  }

}
