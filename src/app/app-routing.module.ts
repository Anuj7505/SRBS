import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './components/page-404/page-404.component';
import { PlansComponent } from './components/plans/plans.component';
import { FeaturesComponent } from './components/features/features.component';
import { ShearedhostingComponent } from './components/plans/sheared-hosting/sheared-hosting.component';
import { ResellerhostingComponent } from './components/plans/reseller-hosting/reseller-hosting.component';
import { CloudhostingComponent } from './components/plans/cloud-hosting/cloud-hosting.component';
import { TermsOfServicesComponent } from './components/terms-of-services/terms-of-services.component';
import { DatahostingComponent } from './components/data-hosting/data-hosting.component';
import { FounderComponent } from './components/founder/founder.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'trustees',
    component:ServiceComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },

  {
    path:'vision-mission',
    component:PlansComponent
  },
  {
    path:'features',
    component:FeaturesComponent

  },
  {
    path:'donate-support',
    component:ResellerhostingComponent

  },
  {
    path:'SRBS-Gurukul',
    component:CloudhostingComponent

  },


  {
    path:'village-project',
    component:ShearedhostingComponent

  },

  {
    path:'terms-service',
    component:TermsOfServicesComponent

  },
  {
    path:'trust-credentials',
    component:DatahostingComponent
  },

  {
    path: 'founder',
    component: FounderComponent
  },

  {
    path:'**',
    component:Page404Component

  },







];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
