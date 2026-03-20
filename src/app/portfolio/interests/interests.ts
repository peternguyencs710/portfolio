import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../image-modal/image-modal';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ImageModalComponent],
  selector: 'app-interests',
  templateUrl: './interests.html',
  styleUrl: './interests.scss',
})
export class InterestsComponent {
    private dialog = inject(MatDialog);
    constructor() {}

    openImageModal(imageUrl: string): void {
        this.dialog.open(ImageModalComponent, {
          data: { imageUrl: imageUrl },
          panelClass: 'custom-modal-container' // Add custom CSS class for styling the dialog container
        });
    }
}