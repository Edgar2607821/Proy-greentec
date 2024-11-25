import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para *ngIf
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { QuienesSomosComponent } from '../quienes-somos/quienes-somos.component';
import { AuthService } from '../../services/auth.service';

import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule 


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, QuienesSomosComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(private router: Router, private authService: AuthService) {}

  goToHome() {
    this.router.navigate(['/QuienesSomos']);  // Redirige a la ruta raíz (AppComponent)
  }

  userData = {
    nombre: '',
    apellidos: '',
    sexo: '',
    correo: '',
    contra: '',
    contra2: '',
  };


  register() {
    if (this.userData.contra !== this.userData.contra2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.userData).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        alert('Registro exitoso');
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario');
      }
    );
  }
}
