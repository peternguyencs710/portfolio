import { Component, inject } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
@Component({
standalone: true,
imports: [CommonModule],
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
    private translate = inject(TranslateService);
    public skillset:any;
    constructor() {
        this.translate.get('skills.skillsset')
            .subscribe((res: string) => {
            console.log(res);  // Output: 'Hello'
            this.skillset = res;
        });
    }
}