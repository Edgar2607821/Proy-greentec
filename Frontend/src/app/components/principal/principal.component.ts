import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [AdminComponent,RouterLink,RouterOutlet,RouterModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {


  constructor(private router: Router) {}



  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
