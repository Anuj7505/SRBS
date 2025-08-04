import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { Page404Component } from './components/page-404/page-404.component';
import { PlansComponent } from './components/plans/plans.component';
import { FeaturesComponent } from './components/features/features.component';
import { ResellerhostingComponent } from './components/plans/reseller-hosting/reseller-hosting.component';
import { CloudhostingComponent } from './components/plans/cloud-hosting/cloud-hosting.component';
import { ShearedhostingComponent } from './components/plans/sheared-hosting/sheared-hosting.component';
import { environment } from './environments/enviorment';
import { TermsOfServicesComponent } from './components/terms-of-services/terms-of-services.component';
import { DatahostingComponent } from './components/data-hosting/data-hosting.component';
import { FounderComponent } from './components/founder/founder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    Page404Component,
    PlansComponent,
    FeaturesComponent,
    ResellerhostingComponent,
    CloudhostingComponent,
    ShearedhostingComponent,
    TermsOfServicesComponent,
    DatahostingComponent,
    FounderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    RecaptchaV3Module, 
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptcha.siteKey,
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
