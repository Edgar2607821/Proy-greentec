import { Component } from '@angular/core';
 import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive,RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export class UsuariosComponent {

  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
import {  OnInit } from '@angular/core';


interface Cliente {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: string;
  estado: string;
  municipio: string;
  cp: string;
  calle: string;
  nExt: string;
  nInt: string;
  colonia: string;
  correo: string;
  telefono: string;
  referencias: string;
}

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class ClienteListaComponent implements OnInit {
  

goToHome() {
throw new Error('Method not implemented.');
}

  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];
  filters = {
    nombre: ' ',
    apellidos: '',
    edad: '',
    sexo: '',
    estado: '',
    municipio: '',
    cp: '',
    calle: '',
    nExt: '',
    nInt: '',
    colonia: '',
    correo: '',
    telefono: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Simular la obtención de datos
    this.clientes = [
    ];

    this.filteredClientes = [...this.clientes];
  }

  applyFilters() {
    this.filteredClientes = this.clientes.filter(cliente => {
      return Object.keys(this.filters).every(key => {
        const filterValue = (this.filters as any)[key].toLowerCase();
        const clienteValue = (cliente as any)[key].toString().toLowerCase();
        return clienteValue.includes(filterValue);
      });
    });
  }

  eliminarCliente(id: number) {
    // Aquí puedes implementar la lógica para eliminar un cliente.
    // Puedes mostrar una alerta de confirmación, y luego eliminar el cliente de la lista.
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    this.applyFilters(); // Actualizar la lista filtrada después de eliminar
  }
}

