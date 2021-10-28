import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'app/models/empleados.model';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  display: boolean;
  formData: Empleados;
  ocultar: boolean;
  cols: any[];
  user: any;
  ocultarboton: boolean;
  add: boolean;
  constructor(private adminService: AdminService, private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {

      /** spinner ends after 3 seconds */
      this.spinner.hide();
    }, 3000);
    this.getEmpleados();
    this.display = true;
    this.ocultar = true;
    this.ocultarboton = true;

    this.cols = [
      { field: 'cedula', header: 'Cedula' },
      { field: 'nombres', header: 'Nombres' },
      { field: 'apellidos', header: 'Apellidos' },
      { field: 'correo', header: 'Correos' },
      { field: 'nacimiento', header: 'Fecha de Nacimiento' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'estado', header: 'Estado' },
      { field: 'estado_vacunacion', header: 'Estado Vacunacion' },
    ];
  }


  show() {
    this.getEmpleados();
    this.spinner.show();
    setTimeout(() => {
      this.display = true;
      this.spinner.hide();
      /** spinner ends after 5 seconds */

    }, 3000);
    this.ocultarboton = false;
  }

  addEmpleado() {
    this.display = false;
    this.ocultarboton = false;
    this.add = true;
    this.ocultar = false;
  }


  getEmpleados() {
    this.adminService.getdata('empleados').subscribe((data) => {
      console.log(data);
      this.formData = data;
    });

  }

  edit(id) {
    console.log(id);
    //localStorage.setItem('empleado', btoa(id));
    this.spinner.show();

    setTimeout(() => {
      this.router.navigate(['/modificar-empleado', id]);
      this.spinner.hide();
    }, 3000);


  }

  alta(id) {
    console.log(id);
    this.spinner.show();

    setTimeout(() => {
      this.adminService.get('userced/' + id).subscribe((data: {}) => {
        this.user = data;
        if (this.user.length === 0) {
          console.log('NADA DE DATOS', this.user.user);
          localStorage.setItem('empleado', btoa(id));
          this.router.navigate(['/creacion']);
        } else {
          console.log('DATOS');
          Swal.fire({
            title: 'Se encontraron datos, deseas editarlos?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, editar!'
          }).then((result) => {
            if (result.value) {
              this.router.navigate(['/modificar-user', this.user[0].user]);
            }
          }
          );
        }
      })

      this.spinner.hide();
    }, 3000);




  }

  modalBorrar(id) {
    Swal.fire({
      title: 'Estas seguro de eliminar este empleado?',
      text: 'No podras revertir los cambios!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminar(id);
      }
    })
  }

  eliminar(idPersona: any) {
    console.log(idPersona);
    this.adminService.delete('empleado/' + idPersona).subscribe(data => {
      this.getEmpleados();
    }, error => {
      console.log(error);
    });
  }

  vacunado(id){
    console.log(id);
    this.spinner.show();
    setTimeout(() => {
      this.adminService.get('vacunced/' + id).subscribe((data: {}) => {
        this.user = data;
        if (this.user.length === 0) {
          console.log('NADA DE DATOS', this.user.user);
          localStorage.setItem('empleado', btoa(id));
          this.router.navigate(['/vacunado']);
        } else {
          console.log('DATOS');
          Swal.fire({
            title: 'Deseas agregar mas vacunas?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            denyButtonText: `Mostrar`,
            denyButtonColor: '#32ab38',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.router.navigate(['/vacunado']);
            } else if (result.isDenied) {
             console.log('Mostrar ');
            }
          })
        }
      })

      this.spinner.hide();
    }, 3000);
  }

}
