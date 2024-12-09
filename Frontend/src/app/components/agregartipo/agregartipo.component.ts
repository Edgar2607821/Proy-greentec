import { AuthService } from '../../services/auth.service';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-agregartipo',
  standalone: true,
  imports:[ReactiveFormsModule, NgFor],
  templateUrl: './agregartipo.component.html',
  styleUrl: './agregartipo.component.css'
})
export class AgregartipoComponent implements OnInit{

  tipoDispForm: FormGroup;
  dispositivos: any[] = []; // Declaración de la propiedad

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.tipoDispForm = this.fb.group({
      dispositivo_id: ['', [Validators.required]], // Relación con Dispositivo
      tipo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.cargarDispositivos(); // Cargar dispositivos al inicializar
  }

  // Método para registrar un tipo de dispositivo
  registrarTipoDisp() {
    if (this.tipoDispForm.valid) {
      const tipoDisp = this.tipoDispForm.value;
      this.authService.crearTipo(tipoDisp).subscribe({
        next: (response) => {
          alert('Tipo de dispositivo registrado exitosamente');
          this.router.navigate(['/tipos']);
        },
        error: (err) => {
          console.error('Error al registrar el tipo de dispositivo:', err);
          alert('Ocurrió un error al registrar el tipo de dispositivo.');
        },
      });
    } else {
      alert('Formulario inválido. Por favor, revisa los campos.');
    }
  }

  // Método para cargar dispositivos desde el servicio
  cargarDispositivos() {
    this.authService.obtenerDispositivos().subscribe({
      next: (response) => {
        this.dispositivos = response.data; // Asignar los datos de la respuesta
      },
      error: (err) => {
        console.error('Error al cargar los dispositivos:', err);
      },
    });
  }

  goToHome() {
    this.router.navigate(['/Catalogo']);  // Redirige a la ruta raíz (AppComponent)
  }
}
