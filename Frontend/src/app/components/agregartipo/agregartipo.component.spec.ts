import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregartipoComponent } from './agregartipo.component';

describe('AgregartipoComponent', () => {
  let component: AgregartipoComponent;
  let fixture: ComponentFixture<AgregartipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregartipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregartipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
