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
    } else {
      alert('Formulario inválido. Por favor revisa los campos.');
    }
  }
}
