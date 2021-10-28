import { Vacunas } from 'app/models/vacunas.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css']
})
export class VacunasComponent implements OnInit {

  add: boolean;
  editar: boolean;
  ocultarboton: boolean;
  display: boolean;
  formData: Vacunas;
  cols: any[];

  constructor(private adminService: AdminService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getVacunas();
    this.ocultarboton = true;
    this.add = false;
    this.editar = false;
    this.display = true;
    this.cols = [
      { field: 'descripcion', header: 'Descripcion' },
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
    this.router.navigate(['/modificar-vacuna', id], {
      skipLocationChange: true,
    });
  }

  getVacunas() {
    this.adminService.getdata('vacunas').subscribe((data) => {
      this.formData = data;
    });

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

  eliminar(idvacuna: any) {
    console.log(idvacuna);
    this.adminService.delete('vacuna/' + idvacuna).subscribe(data => {
      this.getVacunas();
    }, error => {
      console.log(error);
    });
  }


}
