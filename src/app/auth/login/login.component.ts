import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/api';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  toastService = inject(ToastService);

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.http.post(apiUrl+'/auth/login', { email, password }).subscribe({
      next: (res: any) => {
        localStorage.setItem('auth-token', res.token);
        localStorage.setItem('user-profile', JSON.stringify(res.data));
        // Redirecting to the dashboard
        this.router.navigate(['/dashboard']).then(() => {
          this.toastService.show({
            color: 'success',
            message: res.message,
          })
        });
      },
      error: (res: any) => {
        this.toastService.show({
          color: 'danger',
          message: res.error.message,
        });
      },
    });
  }
}
