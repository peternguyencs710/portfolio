import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.scss',
  imports: [CommonModule]
})
export class ProjectComponent {
    private dialog = inject(MatDialog);
    constructor() {}
    
    openImageModal(imageUrl: string) {
        this.dialog.open(ImageModalComponent, {
            data: { imageUrl: imageUrl }
        });
    }
}