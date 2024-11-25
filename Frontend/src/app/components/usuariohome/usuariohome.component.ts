import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuariohome',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './usuariohome.component.html',
  styleUrl: './usuariohome.component.css'
})
export class UsuariohomeComponent {
  constructor(private router: Router) {}

  goToHome() {

    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
