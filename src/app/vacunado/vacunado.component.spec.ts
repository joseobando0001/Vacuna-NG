import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunadoComponent } from './vacunado.component';

describe('VacunadoComponent', () => {
  let component: VacunadoComponent;
  let fixture: ComponentFixture<VacunadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
