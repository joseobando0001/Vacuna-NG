import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn = false;
  constructor(private authService: AuthService, private router: Router) {
}

  ngOnInit() {


  //  this.isLoggedIn = this.authService.isLoggedIn();
   // if (!this.isLoggedIn) {
     // this.login();
     // this.router.navigate(['/person']);
   // }
  }

  //login() {
    //this.authService.obtainAccessToken();
 // }
}
