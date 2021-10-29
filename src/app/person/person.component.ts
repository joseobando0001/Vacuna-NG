import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  cedula;
  empleado: any;

  constructor(private adminService: AdminService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    if (this.cedula === null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe registrarse, para poder visualizar',
      })
    }
    this.cedula = atob(localStorage.getItem('user'));
    this.spinner.show();
    setTimeout(() => {
      this.getPerson(this.cedula);
      this.spinner.hide();
    }, 2000);
  }

  edit(id) {
    console.log(id);
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/editar-persona', id]);
    }, 3000);


  }

  getPerson(id) {
    this.empleado = [];
    this.adminService.get('empleadocedula/' + id).subscribe((data: {}) => {
      this.empleado = data;

    });
  }

}
