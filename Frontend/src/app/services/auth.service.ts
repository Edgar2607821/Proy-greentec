import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'; // Cambia según tu configuración

  constructor(private http: HttpClient) {}

  // Método para registrar un cliente
  registerCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cliente/register`, cliente);
  }
}
