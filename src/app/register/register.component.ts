import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    apelido: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    avatar: new FormControl(''),
  });


  errorCode: boolean;
  message: String;
  success = false;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  async handleAuthLogin(e) {
    e.preventDefault();
    try {
      const response = await this.auth.register(this.form.value);
      console.log(response);

      this.success = true;
      this.message = 'Usuário criado com sucesso, verifique seu e-mail para continuar';

    } catch (error) {
      this.errorCode = true;
      this.message = 'Usuário já cadastrado';
      localStorage.clear();
    }
  }

}
