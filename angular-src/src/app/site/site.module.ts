import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"

// services
import { SiteApiService } from "./site-api.service"

// components
import { SiteViewComponent } from './components/site-view/site-view.component';
import { SiteHomeComponent } from './components/site-home/site-home.component';
import { SiteRegisterComponent } from './components/site-register/site-register.component';
import { SiteLoginComponent } from './components/site-login/site-login.component';
import { SiteNavbarComponent } from './components/site-navbar/site-navbar.component';

@NgModule({
  declarations: [SiteViewComponent, SiteHomeComponent, SiteRegisterComponent, SiteLoginComponent, SiteNavbarComponent],
  exports: [
    SiteViewComponent,
    SiteHomeComponent,
    SiteRegisterComponent,
    SiteLoginComponent,
    SiteNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [SiteApiService],
  bootstrap: []
})
export class SiteModule { }
