import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRutasComponent } from './asignar-rutas.component';

describe('AsignarRutasComponent', () => {
  let component: AsignarRutasComponent;
  let fixture: ComponentFixture<AsignarRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarRutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
