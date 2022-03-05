import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Vacation Planner';
  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  initializeLanguage(): void {
    this.translate.setDefaultLang('de');
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = navigator.languages[0].slice(0, 2);
    }
    this.translate.use(lang);
  }
}
