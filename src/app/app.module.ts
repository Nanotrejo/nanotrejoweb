import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CardFlipModule } from './shared/card/card-flip.module';
import { MatIconModule } from '@angular/material/icon';
import { ProjectComponent } from './shared/project/project.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DarkModeComponent } from './shared/dark-mode/dark-mode.component';
import { MusicComponent } from './shared/about/music/music.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environment/environment';
import { CheatsheetComponent } from './shared/about/cheatsheet/cheatsheet.component';
import { MarkdownModule } from 'ngx-markdown';
import { TrickComponent } from './shared/about/cheatsheet/trick/trick.component';
import { CuriositiesComponent } from './shared/about/cheatsheet/curiosities/curiosities.component';
import { GastronomyComponent } from './shared/about/gastronomy/gastronomy.component';

registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    TimelineComponent,
    DarkModeComponent,
    MusicComponent,
    CheatsheetComponent,
    TrickComponent,
    CuriositiesComponent,
    GastronomyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    CardFlipModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
