import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-vacuna',
  templateUrl: './editar-vacuna.component.html',
  styleUrls: ['./editar-vacuna.component.css']
})
export class EditarVacunaComponent implements OnInit {

  navigationSubscription;
  registerForm: FormGroup;
  submitted = false;
  vacuna: any;
  idform;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private adminService: AdminService, private spinner: NgxSpinnerService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
      }
    });

  }

  ngOnInit(): void {
    this.initializar();
    this.getVacunaId(this.idform);
    this.registerForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
    });
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
    this.editarVacuna();
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

  editarVacuna() {
    this.adminService.post('vacuna', this.vacuna);
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

  getVacunaId(id: number) {
    this.vacuna = [];
    this.adminService.get('vacuna/' + id).subscribe((data: {}) => {
      this.vacuna = data[0];

    });
  }


  initializar() {
    if (this.route.snapshot.params.id.length) {
      this.idform = this.route.snapshot.params.id;
    }
  }

}
