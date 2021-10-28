import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { ModificarUserComponent } from './modificar-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from 'app/services/admin.service';

describe('ModificarUserComponent', () => {
  let component: ModificarUserComponent;
  let fixture: ComponentFixture<ModificarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule ],
      providers: [AdminService],
      declarations: [ ModificarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
