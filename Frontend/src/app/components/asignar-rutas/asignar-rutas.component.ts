import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-asignar-rutas',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterOutlet],
  templateUrl: './asignar-rutas.component.html',
  styleUrl: './asignar-rutas.component.css'
})
export class AsignarRutasComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
import {  OnInit } from '@angular/core';

interface Cliente {
  nombre: string;
  apellidos: string;
  telefono: string;
}

interface Empleado {
  nombre: string;
  apellidos: string;
  correo: string;
  clientes: Cliente[];
}

@Component({
  selector: 'app-empleado-clientes',
  templateUrl: './asignar-rutas.component.html',
  styleUrls: ['./asignar-rutas.component.css']
})
export class EmpleadoClientesComponent implements OnInit {
  goToHome() {
    throw new Error('Method not implemented.');
    }

  empleados: Empleado[] = [
    {
      nombre: 'Juan',
      apellidos: 'Pérez',
      correo: 'juan@example.com',
      clientes: [
        { nombre: 'Carlos', apellidos: 'López', telefono: '1234567890' },
        { nombre: 'Ana', apellidos: 'Martínez', telefono: '0987654321' }
      ]
    },
    {
      nombre: 'Ana',
      apellidos: 'García',
      correo: 'ana@example.com',
      clientes: [] // Sin clientes asignados
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  asignarCliente() {
    console.log("Función para asignar cliente a un empleado.");
    // Lógica para asignar un cliente a un empleado
  }

  reasignarCliente() {
    console.log("Función para reasignar clientes.");
    // Lógica para reasignar clientes
  }
}
