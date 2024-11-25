import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';  // Importa NgIf directamente
import { AdminComponent } from './components/admin/admin.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, LoginComponent, NgIf, AdminComponent, QuienesSomosComponent, 
            BeneficiosComponent, ServiciosComponent, UbicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'GREENTEC';
  constructor(public router: Router) { }


  goToLogin() {
    this.router.navigate(['/login']);  // Redirige a la página de login
  }

  goToRegistro() {
    this.router.navigate(['/Registro']);  // Redirige a la página de login
  }

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }



}
