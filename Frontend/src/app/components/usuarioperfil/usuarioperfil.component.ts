import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-usuarioperfil',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,CommonModule],
  templateUrl: './usuarioperfil.component.html',
  styleUrls: ['./usuarioperfil.component.css']
})
export class UsuarioperfilComponent {


  goToHome() {

    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

  perfilForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // Inicializa el formulario con valores vacíos
    this.perfilForm = this.fb.group({
      nombre: [{ value: '', disabled: true }],
      apellidos: [{ value: '', disabled: true }],
      edad: [''],
      sexo: [''],
      estado: [''],
      municipio: [''],
      cp: [''],
      calle: [''],
      nExt: [''],
      nInt: [''],
      colonia: [''],
      correo: [{ value: '', disabled: true }],
      telefono: [''],
      referencias: ['']
    });
  }

  ngOnInit(): void {
    this.cargarPerfil(); // Carga el perfil al iniciar el componente
  }


  // Carga los datos del perfil utilizando el servicio AuthService
  cargarPerfil(): void {
    this.authService.getClienteProfile().subscribe(
      (response) => {
        // Asigna los valores al formulario
        this.perfilForm.patchValue(response);
      },
      (error) => {
        console.error('Error al cargar el perfil:', error);
      }
    );
  }

  // Guarda los datos del perfil utilizando el servicio AuthService
  guardarPerfil(): void {
    if (this.perfilForm.valid) {
      const data = this.perfilForm.getRawValue(); // Obtén los valores, incluidos los campos deshabilitados
      this.authService.updateClienteProfile(data).subscribe(
        (response) => {
          console.log('Perfil guardado correctamente:', response);
        },
        (error) => {
          console.error('Error al guardar el perfil:', error);
        }
      );
    }
  }
}
