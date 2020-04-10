import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  errorCode: boolean;
  message: String;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async handleAuthLogin(e) {
    e.preventDefault();
    try {
      const response = await this.auth.logar(this.form.value);
      console.log(response);

      if (response) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      }

    } catch (error) {
      this.errorCode = true;
      this.message = 'E-mail e/ou senha inválidos';
      localStorage.clear();
      this.form.reset();
    }
  }

}
