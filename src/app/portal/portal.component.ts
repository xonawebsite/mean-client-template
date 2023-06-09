import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './portal.component.html',
  styles: []
})
export class PortalComponent {
  now = new Date();
}
