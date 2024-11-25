import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'; // Ajusta a la URL de tu API

  constructor(private http: HttpClient) {}

  loginAdmin(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/admin`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  loginCliente(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/cliente`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  loginEmpleado(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/empleado`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    // Handle error
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
