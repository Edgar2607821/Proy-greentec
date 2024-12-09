import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroForm: FormGroup; // Formulario Reactivo

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicializa el formulario reactivo
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      contra: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  goToHome() {
    this.router.navigate(['/QuienesSomos']);  // Redirige a la ruta raíz (AppComponent)
  }

  // Método para registrar un cliente
  register() {
    if (this.registroForm.valid) {
      // Obtener el token CSRF antes de realizar la solicitud de registro
      this.authService.getCsrfToken().subscribe({
        next: () => {
          // Una vez que se obtiene el token CSRF, hacemos el registro
          this.authService.registerCliente(this.registroForm.value).subscribe({
            next: (response) => {
              alert('Registro exitoso');
              this.router.navigate(['/login']);
            },
            error: (err) => {
              console.error(err);
              alert('Error al registrar, verifica los datos e inténtalo nuevamente.');
            },
          });
        },
        error: (err) => {
          console.error('Error al obtener el token CSRF:', err);
          alert('Error al obtener el token CSRF.');
        }
      });
    } else {
      alert('Formulario inválido. Por favor revisa los campos.');
    }
  }

  checkEmail() {
    const correo = this.registroForm.get('correo')?.value;
    this.authService.checkEmailExists(correo).subscribe((response: any) => {
      if (response.exists) {
        alert('El correo ya está registrado.');
      } else {
        this.register(); // Llama a tu método de registro
      }
    });
  }
}
