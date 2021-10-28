import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleados } from 'app/models/empleados.model';
import { Vacunas } from 'app/models/vacunas.model';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  registerForm: FormGroup;
  registerVacunado: FormGroup;
  submitted = false;
  empleado: any;
  display: boolean;
  selected1: any = [];
  formData: Vacunas;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private spinner: NgxSpinnerService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getVacunas();
    this.registerForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      nacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      estado_vacunacion: ['', Validators.required],
      estado: ['', Validators.required]
    });
    this.registerVacunado = this.formBuilder.group({
      vacuna: ['', Validators.required],
    });
    this.empleado = {
      cedula: '',
      nombres: '',
      apellidos: '',
      correo: '',
      nacimiento: '',
      direccion: '',
      telefono: '',
      estado: '',
      estado_vacunacion: '',

    };
    this.display = false;
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get c() { return this.registerVacunado.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.spinner.show();
    this.crearEmpleado();
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  crearEmpleado() {
    this.adminService.post('empleado', this.empleado);
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
      this.spinner.hide();
      /** spinner ends after 5 seconds */
      this.router.navigate(['/empleados']);
    }, 3000);

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
    this.router.navigate(['/empleados']);
    window.location.reload();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getVacunas() {
    this.adminService.getdata('vacunas').subscribe((data) => {
      this.formData = data;
      console.log(data);
    });

  }



}
