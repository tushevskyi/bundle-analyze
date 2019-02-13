import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE } from './config.tokens';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService,
              @Inject(DEFAULT_LANGUAGE) private defLang: string
  ) {
    this.initializeLanguage();
  }

  initializeLanguage() {
    const lang = this.translate.getBrowserLang();
    this.translate.setDefaultLang(this.defLang);
    this.translate.use(lang);
  }

}
