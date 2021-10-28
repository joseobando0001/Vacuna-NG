import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'app/services/admin.service';
import Swal from 'sweetalert2';
import { Empleados } from 'app/models/empleados.model';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  navigationSubscription;
  registerForm: FormGroup;
  registerVacunado: FormGroup;
  submitted = false;
  empleado: any;
  idform;
  formData: Empleados;

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
    this.getEmpleadoId(this.idform);
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
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get m() { return this.registerVacunado.controls; }

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
      this.router.navigate(['/empleados']);

    }, 3000);
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  editarEmpleado() {
    this.adminService.post('empleado', this.empleado);
    this.router.navigate(['/empleados']);
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
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getEmpleadoId(id: number) {
    this.empleado = [];
    this.adminService.get('empleado/' + id).subscribe((data: {}) => {
      this.empleado = data[0];

    });
  }


  initializar() {
    if (this.route.snapshot.params.id.length) {
      this.idform = this.route.snapshot.params.id;
    }
  }



}
