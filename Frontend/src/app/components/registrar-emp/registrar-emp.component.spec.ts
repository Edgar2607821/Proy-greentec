import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpComponent } from './registrar-emp.component';

describe('RegistrarEmpComponent', () => {
  let component: RegistrarEmpComponent;
  let fixture: ComponentFixture<RegistrarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
