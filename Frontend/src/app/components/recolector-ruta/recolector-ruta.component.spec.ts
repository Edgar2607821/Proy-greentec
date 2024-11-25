import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorRutaComponent } from './recolector-ruta.component';

describe('RecolectorRutaComponent', () => {
  let component: RecolectorRutaComponent;
  let fixture: ComponentFixture<RecolectorRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorRutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
