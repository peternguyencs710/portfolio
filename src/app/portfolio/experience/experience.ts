import { Component, inject } from '@angular/core';
import {TranslateService, TranslatePipe} from "@ngx-translate/core";
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageModalComponent } from '../../image-modal/image-modal';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
    private translate = inject(TranslateService);
    private dialog = inject(MatDialog);
    public experience:any;
    constructor() {
        this.translate.get('experience.position')
            .subscribe((res: string) => {
            console.log(res);  // Output: 'Hello'
            this.experience = res;
        });
    }

    openImageModal(imageUrl: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { imageUrl: imageUrl },
      panelClass: 'custom-modal-container' // Add custom CSS class for styling the dialog container
    });
  }
        
}