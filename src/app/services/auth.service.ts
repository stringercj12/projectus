import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  logar(form) {
    return this.http.post<any>(`${this.api}/login`, form).toPromise();
  }

  forgot(form) {
    return this.http.post<any>(`${this.api}/forgot`, form).toPromise();
  }

  register(form) {
    return this.http.post<any>(`${this.api}/register`, form).toPromise();
  }
}
