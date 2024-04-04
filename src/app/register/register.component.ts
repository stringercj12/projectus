import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
    apelido: new UntypedFormControl('', [Validators.required]),
    phone: new UntypedFormControl('', [Validators.required]),
    avatar: new UntypedFormControl(''),
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
