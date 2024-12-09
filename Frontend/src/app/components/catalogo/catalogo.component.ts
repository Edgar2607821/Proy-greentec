import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet, NgFor],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {


  constructor(private router: Router, private authService: AuthService) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }


  dispositivos: any[] = []; // Array para almacenar los dispositivos


  ngOnInit(): void {
    this.cargarDispositivos(); // Llama al método para cargar los dispositivos
  }

  // Método para obtener los dispositivos desde el servicio
  cargarDispositivos() {
    this.authService.obtenerDispositivos().subscribe({
      next: (response) => {
        console.log('Datos obtenidos:', response); // Verifica los datos en la consola
        this.dispositivos = response.data; // Accede a la propiedad `data` y asigna a `dispositivos`
      },
      error: (err) => {
        console.error('Error al obtener los dispositivos:', err);
        alert('Error al cargar los dispositivos.');
      },
    });
  }


}


