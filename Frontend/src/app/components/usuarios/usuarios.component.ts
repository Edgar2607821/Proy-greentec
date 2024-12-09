import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Usamos AuthService
import { NgFor } from '@angular/common';


// Definir la interfaz Cliente
interface Cliente {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: string;
  estado: string;
  municipio: string;
  cp: string;
  calle: string;
  nExt: string;
  nInt: string;
  colonia: string;
  correo: string;
  telefono: string;
  referencias: string;
  // Agregar un índice para permitir acceso dinámico
  [key: string]: string | number; // Esto permite acceder a cualquier propiedad de tipo string o number

}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, NgFor],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];

  // Definir filters como un objeto indexable
  filters: { [key: string]: string } = {
    nombre: '',
    apellidos: '',
    edad: '',
    sexo: '',
    estado: '',
    municipio: '',
    cp: '',
    calle: '',
    nExt: '',
    nInt: '',
    colonia: '',
    correo: '',
    telefono: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  // Método para cargar los clientes
  loadClientes(): void {
    this.authService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
        this.filteredClientes = [...this.clientes];
      },
      error: (err) => {
        console.error('Error al cargar los clientes:', err);
      }
    });
  }

  // Método para aplicar los filtros
  applyFilters(): void {
    this.filteredClientes = this.clientes.filter(cliente => {
      return Object.keys(this.filters).every(key => {
        const filterValue = this.filters[key].toLowerCase(); // Convertir el filtro a minúsculas
        const clienteValue = cliente[key]?.toString().toLowerCase(); // Convertir el valor del cliente a minúsculas
        return clienteValue?.includes(filterValue); // Verificar si el valor del cliente incluye el filtro
      });
    });
  }

  // Método para eliminar un cliente
  eliminarCliente(id: number): void {
    if (confirm('¿Seguro que quieres eliminar a este cliente?')) {
      this.clientes = this.clientes.filter(cliente => cliente.id !== id);
      this.applyFilters();
    }
  }

  // Método para redirigir a la página principal
  goToHome(): void {
    this.router.navigate(['/']);
  }
}

