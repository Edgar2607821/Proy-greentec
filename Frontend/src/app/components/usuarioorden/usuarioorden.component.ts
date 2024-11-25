import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-usuarioorden',
  standalone: true,
  imports:[RouterLink,RouterLinkActive,RouterOutlet,CommonModule],
  templateUrl: './usuarioorden.component.html',
  styleUrls: ['./usuarioorden.component.css']
})
export class UsuarioordenComponent {

  

  goToHome() {

    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

  
  dispositivos = [
    { id: 1, nombre: 'Dispositivo 1' },
    { id: 2, nombre: 'Dispositivo 2' },
    { id: 3, nombre: 'Dispositivo 3' }
  ];
  tipos = [];
  marcas = [];
  modelos = [];

  precioKg: number = 0;
  anioFabricacion: string = '';
  estado: string = '';
  descripcion: string = '';
  peso: number = 0;

  ventasAcumuladas: number = 0;
  pesoAcumulado: number = 0;

  constructor(private router: Router)  {
    // Inicialización de datos de ejemplo o carga de datos desde un servicio
  }

  filtrarTipos(dispositivoId: number) {
    // Simular la carga de tipos según el dispositivo seleccionado
    if (dispositivoId) {
      this.tipos = [
        
      ];
    } else {
      this.tipos = [];
    }
    this.marcas = [];
    this.modelos = [];
  }

  filtrarMarcas(tipoId: number) {
    // Simular la carga de marcas según el tipo seleccionado
    if (tipoId) {
      this.marcas = [
       
      ];
    } else {
      this.marcas = [];
    }
    this.modelos = [];
  }

  filtrarModelos(marcaId: number) {
    // Simular la carga de modelos según la marca seleccionada
    if (marcaId) {
      this.modelos = [
       
      ];
    } else {
      this.modelos = [];
    }
  }

  guardarVenta() {
    // Lógica para manejar el envío del formulario
    console.log('Datos del formulario:', {
      precioKg: this.precioKg,
      anioFabricacion: this.anioFabricacion,
      estado: this.estado,
      descripcion: this.descripcion,
      peso: this.peso
    });

    // Actualizar las ventas acumuladas y el peso
    this.ventasAcumuladas++;
    this.pesoAcumulado += this.peso;

    // Resetear el formulario si es necesario
    this.anioFabricacion = '';
    this.estado = '';
    this.descripcion = '';
    this.peso = 0;
  }
}
