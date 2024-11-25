import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}
import { OnInit } from '@angular/core';

declare const google: any; // Declaración para usar Google Maps API

interface Cliente {
  nombre: string;
  apellidos: string;
  calle: string;
  nExt: string;
  colonia: string;
  municipio: string;
  direccion: string;
}

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class ClienteListaComponent implements OnInit {
  router: any;

  goToHome() {
    
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }
  clientes: Cliente[] = [
    {
      nombre: 'Juan',
      apellidos: 'Pérez',
      calle: 'Insurgentes',
      nExt: '123',
      colonia: 'Centro',
      municipio: 'Ciudad Valles',
      direccion: 'Insurgentes 123, Centro, Ciudad Valles'
    },
    {
      nombre: 'Ana',
      apellidos: 'Martínez',
      calle: 'Vallarta',
      nExt: '456',
      colonia: 'Zapopan',
      municipio: 'Guadalajara',
      direccion: 'Vallarta 456, Zapopan, Guadalajara'
    },
    // Más clientes...
  ];

  map: any;
  directionsService: any;
  directionsRenderer: any;

  ngOnInit(): void {
    // Cargar Google Maps API y luego inicializar el mapa
    this.loadGoogleMaps(() => this.initMap());
  }

  loadGoogleMaps(callback: () => void) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    //window['initMap'] = callback; // Asigna la función de callback
    document.head.appendChild(script);
  }

  initMap() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: { lat: 21.9833, lng: -99.015 }
    });
    this.directionsRenderer.setMap(this.map);
  }

  trazarRuta(destino: string) {
    const origen = 'Carretera al Ingenio Plan de Ayala Vista Hermosa, 79010 Cdad. Valles, S.L.P.';
    this.calcularRuta(origen, destino);
  }

  calcularRuta(origen: string, destino: string) {
    this.directionsService.route(
      {
        origin: origen,
        destination: destino,
        travelMode: 'DRIVING'
      },
      (response: any, status: string) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
        } else {
          console.error('Error al trazar la ruta:', status);
        }
      }
    );
  }
}

