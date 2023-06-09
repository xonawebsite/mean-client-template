import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    password_confirm: ['', Validators.required],
  });

  get passwords_match() {
    const { password, password_confirm } = this.signupForm.value;
    return password && password === password_confirm;
  }

  onSubmit() {
    const { name, email, password } = this.signupForm.value;
    this.http.post(apiUrl+'/auth/signup', { name, email, password }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
