import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [PrincipalComponent,RouterLink,RouterLinkActive,RouterOutlet, UsuariosComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})



export class AdminComponent {

  constructor(private router: Router) {}

  get currentUrl(): string {
    return this.router.url;
  }
  
  Principal(){
    this.router.navigate(['/Principal']);
  }

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

  Usuarios(){
    this.router.navigate(['/Usuarios']);
  }
  Recolectores(){
    this.router.navigate(['/Recolectores'])

  }
  Rutas(){
    this.router.navigate(['./Rutas'])

  }

  Productos(){
    this.router.navigate(['./Productos'])
  }

  Catalogo(){
    this.router.navigate(['./Catalogo'])
  }

  AsignarRutas(){
    this.router.navigate(['./AsignarRutas'])
  }

  Estadisticas(){
    this.router.navigate(['./Estadiscticas'])
  }



}
