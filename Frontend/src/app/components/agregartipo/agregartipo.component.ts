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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.tipoDispForm = this.fb.group({
      dispositivo_id: ['', [Validators.required]], // Relación con Dispositivo
      tipo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

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


  goToHome() {
    this.router.navigate(['/Catalogo']);  // Redirige a la ruta raíz (AppComponent)
  }
}
