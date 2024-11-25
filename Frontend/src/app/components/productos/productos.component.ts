import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor(private router: Router) {}
 
  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
import {OnInit } from '@angular/core';

interface Usuario {
  nombre: string;
  apellidos: string;
}

interface Venta {
  id: number;
  usuario: Usuario;
  dispositivo: string;
  tipo: string;
  marca: string;
  modelo: string;
  anio_fabricacion: number;
  fecha: Date;
  estado: string;
  descripcion: string;
  peso: number;
  pago: number;
}

@Component({
  selector: 'app-ventas-lista',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class VentasListaComponent implements OnInit {
goToHome() {
throw new Error('Method not implemented.');
}

  ventas: Venta[] = [
    {
      id: 1,
      usuario: { nombre: 'Juan', apellidos: 'Pérez' },
      dispositivo: 'Laptop',
      tipo: 'Electrónico',
      marca: 'HP',
      modelo: 'Pavilion',
      anio_fabricacion: 2019,
      fecha: new Date('2023-01-15'),
      estado: 'Nuevo',
      descripcion: 'Laptop HP Pavilion 15 pulgadas',
      peso: 1.5,
      pago: 15000
    },
    {
      id: 2,
      usuario: { nombre: 'Ana', apellidos: 'Martínez' },
      dispositivo: 'Celular',
      tipo: 'Electrónico',
      marca: 'Samsung',
      modelo: 'Galaxy S10',
      anio_fabricacion: 2020,
      fecha: new Date('2023-01-16'),
      estado: 'Usado',
      descripcion: 'Samsung Galaxy S10',
      peso: 0.2,
      pago: 5000
    },
    // Más ventas...
  ];

  filteredVentas: Venta[] = [];
  filters = {
    usuario: '',
    dispositivo: '',
    tipo: '',
    marca: '',
    modelo: '',
    anio_fabricacion: '',
    fecha: '',
    estado: '',
    descripcion: '',
    peso: '',
    pago: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.filteredVentas = [...this.ventas];
  }

  applyFilters() {
    this.filteredVentas = this.ventas.filter(venta => {
      return Object.keys(this.filters).every(key => {
        const filterValue = (this.filters as any)[key].toString().toLowerCase();
        const ventaValue = (venta as any)[key]?.toString().toLowerCase();
        return ventaValue.includes(filterValue);
      });
    });
  }

  eliminarProducto(id: number) {
    this.ventas = this.ventas.filter(venta => venta.id !== id);
    this.applyFilters();
  }
}

