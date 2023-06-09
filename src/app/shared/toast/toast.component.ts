import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styles: []
})
export class ToastComponent {
  @Input() color: 'danger' | 'warning' | 'success' = 'danger';
  @Input() message: string = '';
}
