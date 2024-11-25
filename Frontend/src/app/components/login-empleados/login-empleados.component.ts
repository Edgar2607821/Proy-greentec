import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';  // Importa CommonModule para *ngIf

@Component({
  selector: 'app-login-empleados',
  standalone: true,
  imports: [FormsModule, LoginComponent, CommonModule],
  templateUrl: './login-empleados.component.html',
  styleUrl: './login-empleados.component.css'
})

export class LoginEmpleadosComponent {
      // Método que maneja el envío del formulario
      username: string = '';
      password: string = '';
      errorMessage: string = '';

      onSubmit() {
        console.log('Formulario enviado');
        // Aquí puedes agregar la lógica para autenticar al usuario o manejar los datos
      }
      constructor(private router: Router) {}
      
      goToHome() {
        this.router.navigate(['/QuienesSomos']);  // Redirige a la ruta raíz (AppComponent)
      }

      GoToLogin(){
        this.router.navigate(['/login']);  // Redirige a la ruta raíz (AppComponent)
      }

      GoToAdmin(){
        this.router.navigate(['/LoginAdmin']);
      }
      

      login() {
        // Usuarios predefinidos para la simulación
        const validUsers = [
          { username: 'empleado', password: '123456' },
          { username: 'user1', password: 'password1' }
        ];

        // Verificar si las credenciales coinciden
        const user = validUsers.find(u => u.username === this.username && u.password === this.password);
        if (user) {
          // Redirigir a la página deseada
          this.router.navigate(['/RecolectorHome']);
        } else {
          // Mostrar mensaje de error si las credenciales son incorrectas
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      }

}
