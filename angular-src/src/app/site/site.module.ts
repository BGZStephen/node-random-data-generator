import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"
import { SiteViewComponent } from './components/site-view/site-view.component';
import { SiteHomeComponent } from './components/site-home/site-home.component';
import { SiteRegisterComponent } from './components/site-register/site-register.component';
import { SiteLoginComponent } from './components/site-login/site-login.component';

@NgModule({
  declarations: [SiteViewComponent, SiteHomeComponent, SiteRegisterComponent, SiteLoginComponent],
  exports: [
    SiteViewComponent,
    SiteHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [],
  bootstrap: []
})
export class SiteModule { }
