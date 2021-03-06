import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    return this.httpClient.get(environment.API_URL + url).pipe(
      map(data => {
        return data;
      })
    );
  }

  getdata(url: string): Observable<any> {
    return this.httpClient.get(environment.API_URL + url).pipe((res) => res);
  }

  post(url: string, data: any) {
    return this.httpClient.post(environment.API_URL + url, data).subscribe(
      response => {

      },
      error => {
        return error;
      }

    );
  }

  login(url: string, data: any) {
    return this.httpClient.post(environment.API_URL + url, data).subscribe(
      response => {
      //  console.log(response);
        if (response['tipo'] === 'ADMIN') {
          localStorage.setItem('tipo', btoa(response['tipo']));
          //console.log('ADMIN');
          return response;
        } else if (response['tipo'] === 'EMPLEADO') {
          localStorage.setItem('tipo', btoa(response['tipo']));
          // console.log('empleado');
          return response;
        }
        else if (data === null) {
          localStorage.setItem('tipo', btoa(response['tipo']));
          //console.log('error');
        }
      },
      error => {
        return error;
      }

    );
  }

  delete(url: string) {
    return this.httpClient.delete(environment.API_URL + url);
  }



}
