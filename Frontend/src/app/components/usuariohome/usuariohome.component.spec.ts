import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariohomeComponent } from './usuariohome.component';

describe('UsuariohomeComponent', () => {
  let component: UsuariohomeComponent;
  let fixture: ComponentFixture<UsuariohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariohomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
