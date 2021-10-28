import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVacunadosComponent } from './mostrar-vacunados.component';

describe('MostrarVacunadosComponent', () => {
  let component: MostrarVacunadosComponent;
  let fixture: ComponentFixture<MostrarVacunadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarVacunadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarVacunadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
