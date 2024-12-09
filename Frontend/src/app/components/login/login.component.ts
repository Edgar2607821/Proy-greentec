import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { Router } from '@angular/router';
import { LoginEmpleadosComponent } from '../login-empleados/login-empleados.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule\
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule],
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

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]], // Campo correo con validaciones
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo password con validaciones
    });

  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = {
        correo: this.loginForm.value.correo,
        contra: this.loginForm.value.password, // Cambiar el nombre de password a contra
      };

      this.authService.loginCliente(loginData).subscribe({
        next: (response) => {

          localStorage.setItem('token', response.token);
          this.router.navigate(['/Usuariohome']);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Error al iniciar sesión';
        },
      });
    } else {
      alert('Por favor, completa el formulario correctamente.');
    }
  }

}
