import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    TranslatePipe,
} from "@ngx-translate/core";
@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
}