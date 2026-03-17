import { Component, signal, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideNav } from './side-nav/side-nav';
import { AboutComponent } from './about/about';
import { ExperienceComponent } from './experience/experience';
import { EducationComponent } from './education/education';
import { SkillsComponent } from './skills/skills';
import { InterestsComponent } from './interests/interests';
import { ProjectComponent } from './sideproject/project';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CommonModule,
    SideNav,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    ProjectComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['fr', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }
}
