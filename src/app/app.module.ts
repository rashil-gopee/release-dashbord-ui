import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultimenuComponent } from './components/shared/multimenu/multimenu.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { NgbButtonsModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { ResizeService } from './services/resize.service';

import { AppRoutingModule } from './app-routing.module';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainComponent } from './components/shared/main/main.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../guards/auth.guard';

import { AuthService } from './services/auth.service';
import { ReleaseService } from './services/release.service';

import { ShowAuthedDirective } from './directives/showAuthed.directive';
import { ShowIfAdminDirective } from './directives/showIfAdmin.directive';
import { VisModule } from 'ngx-vis';

import { NgTimelineComponent } from './components/ng-timeline/ng-timeline.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreateReleaseComponent } from './components/create-release/create-release.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// AoT requires an exported function for factories for translate module
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ShowAuthedDirective,
    ShowIfAdminDirective,
    AppComponent,
    MultimenuComponent,
    LoginPageComponent,
    MainComponent,
    NotFoundPageComponent,
    HomeComponent,
    NgTimelineComponent,
    AuthComponent,
    CreateReleaseComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgbButtonsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxGraphModule,
    VisModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    ResizeService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthService,
    ReleaseService,
  ],
  bootstrap: [AppComponent],
  exports: [ShowAuthedDirective, ShowIfAdminDirective]
})
export class AppModule {}
