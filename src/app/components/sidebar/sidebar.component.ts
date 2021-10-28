import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';


declare const $: any;
export const ROUTES = [
  { path: '/person', title: 'Perfil', icon: 'person', class: '' },
  { path: '/empleados', title: 'Empleados', icon: 'badge', class: '' },
  { path: '/register', title: 'Registrarse', icon: 'app_registration', class: '' },
  { path: '/login', title: 'Iniciar Sesion', icon: 'login', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems2: any[];

  constructor(private adminService: AdminService, private spinner: NgxSpinnerService, private router: Router,) { }

  ngOnInit() {
    this.menuItems2 = ROUTES.filter(menuItem => menuItem);

  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };



}
