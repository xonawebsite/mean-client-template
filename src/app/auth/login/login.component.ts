import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.http.post(apiUrl+'/auth/login', { email, password }).subscribe({
      next: (res) => {
        console.log(res)
        // You should now save the received token
        // Redirecting to the dashboard
        this.router.navigate(['/dashboard']).then(() => {
          console.log('Welcome!');
        });
      },
      error: (err) => {
        // You should show some feedback to the user and optionally clear entries
        console.log(err)
      },
    });
  }
}
