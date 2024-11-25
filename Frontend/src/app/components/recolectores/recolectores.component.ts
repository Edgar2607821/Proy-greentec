import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-recolectores',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet],
  templateUrl: './recolectores.component.html',
  styleUrl: './recolectores.component.css'
})
export class RecolectoresComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
import { OnInit } from '@angular/core';

interface Empleado {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: string;
  correo: string;
  departamento: string;
  puesto: string;
  fecha: Date;
  num_telefono: string;
}

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './recolectores.component.html',
  styleUrls: ['./recolectores.component.css']
})
export class EmpleadoListaComponent implements OnInit {
  router: any;

  goToHome() {
    
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }
  

  empleados: Empleado[] = [];
  filteredEmpleados: Empleado[] = [];
  filters = {
    nombre: '',
    apellidos: '',
    edad: '',
    sexo: '',
    correo: '',
    departamento: '',
    puesto: '',
    fecha: '',
    num_telefono: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Simulación de datos de empleados
    this.empleados = [
      { id: 1, nombre: 'Juan', apellidos: 'Pérez', edad: 30, sexo: 'M', correo: 'juan@example.com', departamento: 'Reciclaje', puesto: 'Recolector', fecha: new Date('2022-01-15T10:00:00'), num_telefono: '5555555555' },
      { id: 2, nombre: 'Ana', apellidos: 'Martínez', edad: 25, sexo: 'F', correo: 'ana@example.com', departamento: 'Reciclaje', puesto: 'Supervisor', fecha: new Date('2021-10-10T09:30:00'), num_telefono: '5555555556' },
      // Más empleados...
    ];

    this.filteredEmpleados = [...this.empleados];
  }

  applyFilters() {
    this.filteredEmpleados = this.empleados.filter(empleado => {
      return Object.keys(this.filters).every(key => {
        const filterValue = (this.filters as any)[key].toLowerCase();
        const empleadoValue = (empleado as any)[key].toString().toLowerCase();
        return empleadoValue.includes(filterValue);
      });
    });
  }

  editarEmpleado(id: number) {
    // Implementa la lógica de edición de empleado aquí.
    // Por ejemplo, redirige a la página de edición de empleado con el id correspondiente.
    console.log(`Editar empleado con ID: ${id}`);
  }

  eliminarEmpleado(id: number) {
    // Implementa la lógica de eliminación de empleado aquí.
    // Por ejemplo, muestra una confirmación y elimina al empleado de la lista.
    this.empleados = this.empleados.filter(empleado => empleado.id !== id);
    this.applyFilters();
  }

  registrarEmpleado() {
    // Implementa la lógica para registrar un nuevo empleado.
    console.log('Registrar nuevo empleado');
  }
}
