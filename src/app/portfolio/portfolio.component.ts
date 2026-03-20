import { Component } from '@angular/core';
import { InterestsComponent } from './interests/interests';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';
import { EducationComponent } from './education/education';
import { AboutComponent } from './about/about';

@Component({
  standalone:true,
  selector: 'app-portfolio',
  template: `
    <app-about></app-about>
    <hr class="m-0" />
    <app-experience></app-experience>
    <hr class="m-0" />
    <app-education></app-education>
    <hr class="m-0" />
    <app-skills></app-skills>
    <hr class="m-0" />
    <app-interests></app-interests>

  `,
  imports: [AboutComponent,
      EducationComponent,
      ExperienceComponent,
      SkillsComponent,
      InterestsComponent],
  styles: []
})
export class PortfolioComponent {}
