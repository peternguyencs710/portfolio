import { Component } from '@angular/core';
import { ProjectComponent } from './project/project';

@Component({
  standalone: true,
  selector: 'app-sideproject',
  templateUrl: './sideproject.html',
  imports: [ProjectComponent],
})
export class SideProjectComponent {}
