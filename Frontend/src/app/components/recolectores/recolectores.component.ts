import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recolectores',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, NgFor],
  templateUrl: './recolectores.component.html',
  styleUrls: ['./recolectores.component.css']  // Corregido 'styleUrl' a 'styleUrls'
})
export class RecolectoresComponent {

  empleados: any[] = []; // Aquí se almacenarán los empleados

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.obtenerEmpleados(); // Llama al método para obtener los empleados al cargar el componente
  }

  obtenerEmpleados() {
    this.authService.getEmpleados().subscribe(
      (response: any[]) => {
        this.empleados = response; // Asigna el array de empleados
        console.log(this.empleados); // Verifica los datos
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }

  editarEmpleado(empleado: any) {
    console.log('Editar empleado:', empleado);
    // Implementa la lógica para editar
  }

  eliminarEmpleado(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      this.authService.deleteEmpleado(id).subscribe(
        () => {
          console.log('Empleado eliminado');
          this.obtenerEmpleados(); // Actualiza la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar empleado:', error);
        }
      );
    }
  }

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

  goRegistro() {
    this.router.navigate(['/RegistroEmp']);  // Redirige a la ruta de registro de empleados
  }
}
