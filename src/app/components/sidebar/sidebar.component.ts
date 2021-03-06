import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


declare const $: any;
export const ROUTES = [
  { path: '/home', title: 'Inicio', icon: 'home', class: '' },
  { path: '/person', title: 'Perfil', icon: 'person', class: '' },
  { path: '/empleados', title: 'Empleados', icon: 'badge', class: '' },
  { path: '/register', title: 'Registrarse', icon: 'app_registration', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems2: any[];

  constructor(private spinner: NgxSpinnerService, private router: Router,) { }

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
