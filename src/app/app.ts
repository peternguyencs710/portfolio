import { Component, signal, inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import { SideNav } from './side-nav/side-nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SideNav, RouterOutlet ]
})
export class App {
  private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['fr', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }
}
