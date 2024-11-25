import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioordenComponent } from './usuarioorden.component';

describe('UsuarioordenComponent', () => {
  let component: UsuarioordenComponent;
  let fixture: ComponentFixture<UsuarioordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioordenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
