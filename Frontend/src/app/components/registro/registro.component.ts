import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para *ngIf
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { QuienesSomosComponent } from '../quienes-somos/quienes-somos.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, QuienesSomosComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(public router: Router) { }

  goToHome() {
    this.router.navigate(['/QuienesSomos']);  // Redirige a la ruta raíz (AppComponent)
  }
}
