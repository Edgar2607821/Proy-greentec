import { Component } from '@angular/core';
 import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterLinkActive,RouterOutlet],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class DashboardComponent implements OnInit {
  router: any;

  goToHome() {
    
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

  clientesGraphHtml: string = '<!-- HTML para gráfico de clientes -->';
  ventasGraphHtml: string = '<!-- HTML para gráfico de ventas -->';
  empleadosGraphHtml: string = '<!-- HTML para gráfico de empleados -->';
  donacionesGraphHtml: string = '<!-- HTML para gráfico de donaciones -->';
  
  constructor() { }

  ngOnInit(): void {
    // Lógica para inicializar o cargar gráficos dinámicos
    // Ejemplo: Cargar datos para gráficos o generar contenido en graphHtml y graph2Html
  }
}

