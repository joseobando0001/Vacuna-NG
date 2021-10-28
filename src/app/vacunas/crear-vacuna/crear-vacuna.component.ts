import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-vacuna',
  templateUrl: './crear-vacuna.component.html',
  styleUrls: ['./crear-vacuna.component.css']
})
export class CrearVacunaComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  vacuna: any;
  display: boolean;
  selected1: any = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
    private spinner: NgxSpinnerService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
    });
    this.display = false;
    this.vacuna = {
      descripcion: '',
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
    this.spinner.show();
    this.crearEmpleado();
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  crearEmpleado() {
      this.adminService.post('vacuna', this.vacuna);
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

 
}
