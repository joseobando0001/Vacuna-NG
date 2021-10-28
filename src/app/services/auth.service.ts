import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
//import { OAuthService } from 'angular-oauth2-oidc';
//import { authConfig } from 'app/conf/oauth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient ) { }


 login(identifier: string, password: string) {
    return this.http.post<any>(`${environment.API_URL}user/login`, { identifier, password })
      .pipe(map(data => {
        // login successful if there's a jwt token in the response

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log('HOLA', data);
          if (data.tipo === 'ADMIN') {
            console.log('ADMIN');
          }

      }, error => {
        console.log('ERROR', error);
      }
      ));
  }
}
