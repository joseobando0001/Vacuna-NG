import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { CreacionComponent } from './creacion.component';
import { AdminService } from 'app/services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreacionComponent', () => {
  let component: CreacionComponent;
  let fixture: ComponentFixture<CreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule ],
      providers: [AdminService],
      declarations: [ CreacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
