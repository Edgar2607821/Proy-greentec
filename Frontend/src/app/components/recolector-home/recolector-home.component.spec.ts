import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorHomeComponent } from './recolector-home.component';

describe('RecolectorHomeComponent', () => {
  let component: RecolectorHomeComponent;
  let fixture: ComponentFixture<RecolectorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
