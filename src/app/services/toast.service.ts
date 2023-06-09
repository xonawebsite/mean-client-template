import { Injectable } from '@angular/core';

export interface Toast {
  message: string,
  color: 'danger' | 'success' | 'warning',
  id?: number,
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  show(toast: Toast) {
    const id = this.toasts.length;
    toast.id = id;
    this.toasts.push(toast);
    setTimeout(() => this.toasts.splice(this.toasts.findIndex(t => t.id == id), 1), 2500);
  }
}
