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
    return this.http.post(`${this.apiUrl}/register`, cliente, {
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
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getCsrfToken(): Observable<any> {
    return this.http.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
  }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clientes`); // Asegúrate de que esta ruta sea correcta
  }

// Método para obtener todos los empleados

getEmpleados(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8000/api/empleados');
}

// Método para obtener un empleado por ID
getEmpleadoById(id: number) {
  return this.http.get(`http://localhost:8000/api/empleado/${id}`);
}

// Método para registrar un nuevo empleado
registerEmpleado(empleado: any) {
  return this.http.post('http://localhost:8000/api/empleado', empleado);
}

// Método para actualizar un empleado
updateEmpleado(id: number, empleado: any) {
  return this.http.put(`http://localhost:8000/api/empleado/${id}`, empleado);
}

// Método para eliminar un empleado
deleteEmpleado(id: number) {
  return this.http.delete(`http://localhost:8000/api/empleado/${id}`);
}


crearDispositivo(dispositivo: any): Observable<any> {
  return this.http.post('http://localhost:8000/api/dispositivos', dispositivo);
}

// Otros métodos (opcional) para listar, editar, eliminar dispositivos
obtenerDispositivos(): Observable<{ data: any[] }> {
  return this.http.get<{ data: any[] }>(`${this.apiUrl}/dispositivos`);
}

obtenerTipos(): Observable<{ data: any[] }> {
  return this.http.get<{ data: any[] }>(`${this.apiUrl}/tipos`);
}

// Crear un nuevo tipo de dispositivo
crearTipo(data: { dispositivo_id: number; tipo: string }): Observable<any> {
  return this.http.post(`${this.apiUrl}/tipos`, data);
}

// Editar un tipo de dispositivo
editarTipo(id: number, data: { dispositivo_id: number; tipo: string }): Observable<any> {
  return this.http.put(`${this.apiUrl}/tipos/${id}`, data);
}

// Eliminar un tipo de dispositivo
eliminarTipo(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/tipos/${id}`);
}


}


