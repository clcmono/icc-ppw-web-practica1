import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
     this.router.navigateByUrl('/home');
  }



 }
