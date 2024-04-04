import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  form = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required])
  });
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  setMsg: string;

  async handleForgot(e) {
    e.preventDefault();

    if (this.form.valid) {
      this.setMsg = 'Preencha seu e-mail para continuar';
    } else {
      try {
        const response = await this.auth.forgot(this.form.value);
        const result = response.data;

        if (result) {
          localStorage.clear();
          // history.push('/dashboard');
        }
        this.setMsg = 'Foi enviado instruções para seu e-mail para te ajudar na recuperação da senha';

      } catch (error) {
        this.setMsg = 'Desculpe mas esse e-mail não existe em nossa base, entre em contato com seu supervisor';
        localStorage.clear();
      }
    }
  }

}
