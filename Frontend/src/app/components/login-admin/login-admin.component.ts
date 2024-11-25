import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { CommonModule } from '@angular/common';  // Importa CommonModule para *ngIf
import { AdminComponent } from '../admin/admin.component';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login-admin',
  standalone: true,  // Indicar que el componente es independiente
  imports: [RouterLinkActive, FormsModule, CommonModule, AdminComponent,RouterOutlet, RouterLink],  // Agregar FormsModule y CommonModule en imports
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public router: Router) { }

  // Método que maneja el envío del formulario
  onSubmit() {
    console.log('Formulario enviado');
  }

  goToHome() {
    this.router.navigate(['/QuienesSomos']);  // Redirige a la ruta raíz (AppComponent)
  }

  LoginEmpleado() {
    this.router.navigate(['/LoginEmpleado']);  // Redirige al login de empleados
  }

  LoginAdmin() {
    this.router.navigate(['/LoginAdmin']); // Te mandará al login de administradores
  }
  goToAdmin() {
    this.router.navigate(['/admin']);  // Redirige a la página de login
  }


  login() {
    // Usuarios predefinidos para la simulación
    const validUsers = [
      { username: 'admin', password: '123456' },
      { username: 'user1', password: 'password1' }
    ];

    // Verificar si las credenciales coinciden
    const user = validUsers.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      // Redirigir a la página deseada
      this.router.navigate(['/admin']);
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }


}
