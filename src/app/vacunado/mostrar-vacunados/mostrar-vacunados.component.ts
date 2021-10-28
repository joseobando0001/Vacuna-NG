import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacunacionEmpleado } from 'app/models/vacunacionempleado.model';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-vacunados',
  templateUrl: './mostrar-vacunados.component.html',
  styleUrls: ['./mostrar-vacunados.component.css']
})
export class MostrarVacunadosComponent implements OnInit {
  add: boolean;
  editar: boolean;
  cedula;
  ocultarboton: boolean;
  display: boolean;
  formData: VacunacionEmpleado;
  cols: any[];
  constructor(private adminService: AdminService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.cedula = atob(localStorage.getItem('empleado'));
    console.log(this.cedula);
    this.getVacunasbyCedula(this.cedula);
    this.ocultarboton = true;
    this.add = false;
    this.editar = false;
    this.display = true;
    this.cols = [
      { field: 'descripcion', header: 'Descripcion' },
      { field: 'fecha', header: 'Fecha de vacunación' },
      { field: 'numero', header: 'Numero de dosis' },

    ];

  }

  addVacuna() {
    this.display = false;
    this.ocultarboton = false;
    this.add = true;
  }

  edit(id: number) {
    this.getModificarVacuna(id);
    this.editar = true;
  }

  getModificarVacuna(id: number) {
    this.router.navigate(['/modificar-vacunaciones', id], {
      skipLocationChange: true,
    });
  }

  getVacunasbyCedula(id) {
    this.adminService.getdata('vacunacionesced/' + id).subscribe((data) => {
      this.formData = data;
    });

  }

  modalBorrar(id) {
    Swal.fire({
      title: 'Estas seguro de eliminar esta vacunación?',
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

  eliminar(idvacuna: any) {
    console.log(idvacuna);
    this.adminService.delete('vacunacion/' + idvacuna).subscribe(data => {
      Swal.fire({
        title: 'Eliminado!',
        text: 'La vacunación ha sido eliminada',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
      this.getVacunasbyCedula(this.cedula);
    }, error => {
      console.log(error);
    });
  }


}
