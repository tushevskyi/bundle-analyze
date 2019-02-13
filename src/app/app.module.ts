import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { DEFAULT_LANGUAGE, LANG_FOLDER } from './config.tokens';

export function translateLoaderFactory(http: HttpClient, folder: string) {
  return new TranslateHttpLoader(http, './' + folder, '.json');
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient, LANG_FOLDER],
        provide: TranslateLoader,
        useFactory: translateLoaderFactory
      }
    }),
    AppRoutingModule
  ],
  providers: [
    { provide: DEFAULT_LANGUAGE, useValue: window['DEFAULT_LANGUAGE'] || 'en' },
    { provide: LANG_FOLDER, useValue: window['LANG_FOLDER'] || 'i18n/' },
  ]
})
export class AppModule {
}
