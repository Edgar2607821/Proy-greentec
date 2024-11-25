import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { Router } from '@angular/router';
import { LoginEmpleadosComponent } from '../login-empleados/login-empleados.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, LoginEmpleadosComponent,RouterLinkActive, RouterLink, RouterOutlet,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

      // Método que maneja el envío del formulario
  onSubmit() {
    console.log('Formulario enviado');
    // Aquí puedes agregar la lógica para autenticar al usuario o manejar los datos
  }
  constructor(private router: Router) {}
  
  goToHome() {
    this.router.navigate(['/QuienesSomos']);  // Redirige a la ruta raíz (AppComponent)
  }

  GoToLogin(){
    this.router.navigate(['/login']);
  }
  GoToEmpleado(){
    this.router.navigate(['/LoginEmpleado']);
  }
  GoToAdmin(){
    this.router.navigate(['/LoginAdmin']);
  }

  LoginEmpleado() {
    this.router.navigate(['/LoginEmpleado']);  // Redirige a la ruta raíz (AppComponent)
  }
  login() {
    // Usuarios predefinidos para la simulación
    const validUsers = [
      { username: 'usuario', password: '123456' },
      { username: 'user1', password: 'password1' }
    ];

    // Verificar si las credenciales coinciden
    const user = validUsers.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      // Redirigir a la página deseada
      this.router.navigate(['/Usuariohome']);
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }


}
