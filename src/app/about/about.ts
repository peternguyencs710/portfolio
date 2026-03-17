import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [CommonModule]
})
export class AboutComponent {}
