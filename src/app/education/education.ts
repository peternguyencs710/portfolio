import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    TranslateService,
    TranslatePipe,
} from "@ngx-translate/core";
@Component({
  standalone: true,
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
  imports: [CommonModule, TranslatePipe]
})
export class EducationComponent {
}