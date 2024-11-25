import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorArchivoComponent } from './recolector-archivo.component';

describe('RecolectorArchivoComponent', () => {
  let component: RecolectorArchivoComponent;
  let fixture: ComponentFixture<RecolectorArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
