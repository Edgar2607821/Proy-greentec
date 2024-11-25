import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';


declare var google: any;



@Component({
  selector: 'app-recolector-ruta',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './recolector-ruta.component.html',
  styleUrl: './recolector-ruta.component.css'
})
export class RecolectorRutaComponent {
  
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }
}
