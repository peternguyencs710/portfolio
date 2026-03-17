import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-image-modal',
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.scss',
  imports: [CommonModule]
})
export class ImageModalComponent  {
  
  constructor(
    @Inject(MatDialogRef) public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }
  ) {}

}
