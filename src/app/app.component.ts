import { Component, inject } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  template: `<div class="top-4 right-4 w-0 h-0 z-50 fixed"><app-toast [message]="toast.message" [color]="toast.color" *ngFor="let toast of toastService.toasts"></app-toast></div><router-outlet></router-outlet>`,
  styles: ['']
})
export class AppComponent {
  toastService = inject(ToastService);
}
