import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/api';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  toastService = inject(ToastService);

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
      next: (res: any) => {
        localStorage.setItem('auth-token', res.token);
        localStorage.setItem('user-profile', JSON.stringify(res.data));
        // redirecting to dashboard
        this.router.navigate(['/dashboard']).then(() => {
          this.toastService.show({
            color: 'success',
            message: res.message,
          });
        });
      },
      error: (res: any) => {
        this.toastService.show({
          color: 'danger',
          message: res.error.message,
        })
      },
    });
  }
}
