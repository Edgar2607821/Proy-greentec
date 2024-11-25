import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usuarioperfil',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,CommonModule],
  templateUrl: './usuarioperfil.component.html',
  styleUrls: ['./usuarioperfil.component.css']
})
export class UsuarioperfilComponent {
  constructor(private router: Router) {}

  goToHome() {

    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }
  // Propiedades para simular datos de un cliente
  cliente = {
    nombre: 'Juan',
    apellidos: 'Pérez',
    edad: 30,
    sexo: 'Masculino',
    estado: 'Ciudad de México',
    municipio: 'Benito Juárez',
    cp: '03100',
    calle: 'Avenida Insurgentes',
    nExt: '123',
    nInt: '4B',
    colonia: 'Del Valle',
    correo: 'juan.perez@example.com',
    telefono: '555-123-4567',
    referencias: 'Cerca del parque central'
  };

  // Método de ejemplo para manejar el envío del formulario
  guardarPerfil() {
    console.log('Datos guardados:', this.cliente);
    alert('Datos guardados correctamente (solo para diseño)');
  }
}
