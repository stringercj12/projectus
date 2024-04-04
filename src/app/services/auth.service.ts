import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  logar(form): Observable<any> {
    // return this.http.post<any>(`${this.api}/login`, form).toPromise();
    if (form.email == 'admin') {
      return of({
        token: 'fssofsn23045324nmrd023n5320325mn.sdf'
      })
    }
    return of(false)
  }

  forgot(form) {
    return this.http.post<any>(`${this.api}/forgot`, form).toPromise();
  }

  register(form) {
    return this.http.post<any>(`${this.api}/register`, form).toPromise();
  }
}
