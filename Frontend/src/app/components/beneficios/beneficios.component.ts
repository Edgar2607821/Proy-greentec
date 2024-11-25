import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {Swiper } from 'swiper';
import { EffectCoverflow } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';


import { NgFor } from '@angular/common';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.css'
})


export class BeneficiosComponent implements OnInit {

  benefits = [
    { text: 'Contribución a la sustentabilidad', image: 'assets/img/sustentabilidad.jpg' },
    { text: 'Facilidad de disposición', image: 'assets/img/facilidad.jpg' },
    { text: 'Cumplimiento normativo', image: 'assets/img/cumplimiento.jpg' },
    { text: 'Responsabilidad social', image: 'assets/img/responsabilidad.jpg' },
    { text: 'Transparencia y trazabilidad', image: 'assets/img/transparencia.jpg' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Solo ejecuta Swiper si el código se está ejecutando en el navegador
    if (isPlatformBrowser(this.platformId)) {
      Swiper.use([EffectCoverflow]);

      const swiperConfig: SwiperOptions = {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          depth: 500,
          modifier: 1,
          slideShadows: true,
          rotate: 0,
          stretch: 0
        }
      };

      new Swiper(".mySwiper", swiperConfig);
    }
  }
}