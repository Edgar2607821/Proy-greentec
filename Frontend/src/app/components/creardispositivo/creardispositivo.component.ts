import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-creardispositivo',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './creardispositivo.component.html',
  styleUrl: './creardispositivo.component.css'
})
export class CreardispositivoComponent {
  dispositivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, // Cambiado a AuthService
    private router: Router
  ) {
    // Inicializa el formulario reactivo
    this.dispositivoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  // Método para registrar un dispositivo
  registrarDispositivo() {
    if (this.dispositivoForm.valid) {
      const dispositivo = this.dispositivoForm.value;
      this.authService.crearDispositivo(dispositivo).subscribe({
        next: (response) => {
          alert('Dispositivo registrado exitosamente');
          this.router.navigate(['/Catalogo']); // Redirigir a la lista de dispositivos
        },
        error: (err) => {
          console.error('Error al registrar el dispositivo:', err);
          alert('Ocurrió un error al registrar el dispositivo.');
        },
      });
    } else {
      alert('Formulario inválido. Por favor, revisa los campos.');
    }
  }
  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }
}
