import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recolector-archivo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './recolector-archivo.component.html',
  styleUrl: './recolector-archivo.component.css'
})
export class RecolectorArchivoComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }
}
