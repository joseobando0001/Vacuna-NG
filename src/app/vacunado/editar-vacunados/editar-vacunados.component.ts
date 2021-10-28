import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-vacunados',
  templateUrl: './editar-vacunados.component.html',
  styleUrls: ['./editar-vacunados.component.css']
})
export class EditarVacunadosComponent implements OnInit {

  navigationSubscription;
  registerForm: FormGroup;
  registerVacunado: FormGroup;
  submitted = false;
  vacunado: any;
  vacunas: any;
  idform;
  cedula;

  cols: any[];
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private adminService: AdminService, private spinner: NgxSpinnerService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
      }
    });

  }

  ngOnInit(): void {
    this.initializar();
    this.getVacunas();
    this.cedula = atob(localStorage.getItem('empleado'));
    this.getEmpleadoId(this.idform);
    this.registerForm = this.formBuilder.group({
      vacuna: ['', Validators.required],
      fecha: ['', Validators.required],
      numero_dosis: ['', Validators.required],
    });
    this.vacunado = {
      cedula: '',
      id_vacuna: '',
      apellidos: '',
      fecha: '',
      numero_dosis: '',
    };
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.editarEmpleado();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Guardado Exitosamente'
    })
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.router.navigate(['/vacunaciones']);

    }, 3000);
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  editarEmpleado() {
    this.adminService.post('vacunacion', this.vacunado);
    this.router.navigate(['/vacunaciones']);
  }

  cancelModal() {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'No podras revertir los cambios!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cancel();
      }
    })
  }

  cancel() {
    this.router.navigate(['/vacunaciones']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getEmpleadoId(id: number) {
    this.vacunado = [];
    this.adminService.get('vacunacion/' + id).subscribe((data: {}) => {
      this.vacunado = data[0];

    });
  }

  getVacunas() {
    this.vacunas = [];
    this.adminService.get('vacunas').subscribe((data: {}) => {
      this.vacunas = data;

    });
  }


  initializar() {
    if (this.route.snapshot.params.id.length) {
      this.idform = this.route.snapshot.params.id;
    }
  }

}
