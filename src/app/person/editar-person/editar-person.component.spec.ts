import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonComponent } from './editar-person.component';

describe('EditarPersonComponent', () => {
  let component: EditarPersonComponent;
  let fixture: ComponentFixture<EditarPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
