import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVacunadosComponent } from './editar-vacunados.component';

describe('EditarVacunadosComponent', () => {
  let component: EditarVacunadosComponent;
  let fixture: ComponentFixture<EditarVacunadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVacunadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVacunadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
