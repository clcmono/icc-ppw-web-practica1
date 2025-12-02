import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormUtils } from '../../../FormUtils/formUtils';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule],
  standalone:true,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

  private fb = inject(FormBuilder);
  private router = inject(Router); 
  formUtils = FormUtils;
  loginError = signal('');

  // Credenciales quemadas
  private readonly VALID_USER = {
    correo: 'claudia@gmail.com',
    password: '12345'
  };

  myForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { correo, password } = this.myForm.value;

    // Validar credenciales
    if (correo === this.VALID_USER.correo && password === this.VALID_USER.password) {
      console.log('Login exitoso:', this.myForm.value);
      this.loginError.set('');
      this.router.navigateByUrl('/home');
    } else {
      this.loginError.set('Correo o contraseña incorrecto');
      console.log('Login fallido');
    }
  }
}
