import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';  // Asegúrate de que el servicio esté disponible
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrar-emp',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, ReactiveFormsModule, NgIf],  // Importa ReactiveFormsModule aquí para usar formularios reactivos
  templateUrl: './registrar-emp.component.html',
  styleUrls: ['./registrar-emp.component.css']  // Cambié styleUrl a styleUrls
})
export class RegistrarEmpComponent implements OnInit {

  registroEmpleadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicializa el formulario reactivo
    this.registroEmpleadoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      sexo: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      contra: ['', [Validators.required, Validators.minLength(6)]],
      departamento: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      num_telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],  // Número de teléfono con 10 dígitos
    });
  }

  ngOnInit(): void {
    // Inicialización adicional si es necesario
  }

  // Método para registrar un empleado
  registerEmpleado() {
    if (this.registroEmpleadoForm.valid) {
      this.authService.registerEmpleado(this.registroEmpleadoForm.value).subscribe({
        next: (response) => {
          alert('Empleado registrado exitosamente');
          this.router.navigate(['/empleados']);  // Redirigir después de registrar
        },
        error: (err) => {
          console.error('Error en el registro:', err); // Mostrar más detalles del error
          alert('Error al registrar al empleado, verifica los datos e inténtalo nuevamente.');
        },
      });
    } else {
      alert('Formulario inválido. Por favor revisa los campos.');
    }
  }


  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
