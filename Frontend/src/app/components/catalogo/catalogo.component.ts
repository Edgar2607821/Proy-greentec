import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
import {  OnInit } from '@angular/core';

interface Dispositivo {
  nombre: string;
}

interface Tipo {
  tipo: string;
  dispositivo: Dispositivo;
}

interface Marca {
  nombre: string;
  tipo: Tipo;
}

interface Modelo {
  nombre: string;
  marca: Marca;
}

interface Precio {
  id: number;
  modelo: Modelo;
  preciokg: number;
}

@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoListaComponent implements OnInit {
goToHome() {
throw new Error('Method not implemented.');
}

  precios: Precio[] = [
    {
      id: 1,
      modelo: { nombre: 'Pavilion', marca: { nombre: 'HP', tipo: { tipo: 'Laptop', dispositivo: { nombre: 'Computadora' } } } },
      preciokg: 150
    },
    {
      id: 2,
      modelo: { nombre: 'Galaxy S10', marca: { nombre: 'Samsung', tipo: { tipo: 'Celular', dispositivo: { nombre: 'Electrónico' } } } },
      preciokg: 200
    },
    // Más precios...
  ];

  filteredPrecios: Precio[] = [];
  filters = {
    dispositivo: '',
    tipo: '',
    marca: '',
    modelo: '',
    preciokg: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.filteredPrecios = [...this.precios];
  }

  applyFilters() {
    this.filteredPrecios = this.precios.filter(precio => {
      return Object.keys(this.filters).every(key => {
        const filterValue = (this.filters as any)[key].toString().toLowerCase();
        const precioValue = (precio as any)[key]?.toString().toLowerCase();
        return precioValue.includes(filterValue);
      });
    });
  }

  editarPrecio(id: number) {
    // Implementa la lógica de edición del precio
    console.log(`Editar precio con ID: ${id}`);
  }

  eliminarPrecio(id: number) {
    // Implementa la lógica de eliminación del precio
    this.precios = this.precios.filter(precio => precio.id !== id);
    this.applyFilters();
  }

  agregarDispositivo() {
    // Redirige a la página de creación de dispositivo
    console.log('Agregar Dispositivo');
  }

  agregarTipo() {
    // Redirige a la página de creación de tipo
    console.log('Agregar Tipo');
  }

  agregarMarca() {
    // Redirige a la página de creación de marca
    console.log('Agregar Marca');
  }

  agregarModelo() {
    // Redirige a la página de creación de modelo
    console.log('Agregar Modelo');
  }
}

