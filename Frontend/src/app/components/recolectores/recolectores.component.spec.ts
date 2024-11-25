import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectoresComponent } from './recolectores.component';

describe('RecolectoresComponent', () => {
  let component: RecolectoresComponent;
  let fixture: ComponentFixture<RecolectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
