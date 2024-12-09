import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardispositivoComponent } from './creardispositivo.component';

describe('CreardispositivoComponent', () => {
  let component: CreardispositivoComponent;
  let fixture: ComponentFixture<CreardispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreardispositivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreardispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
