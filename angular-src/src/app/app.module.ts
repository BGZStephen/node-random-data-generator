import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"

import { AppComponent } from './app.component';

// modules
import { SiteModule } from "./site/site.module"
import { DashboardModule } from "./dashboard/dashboard.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SiteModule,
    DashboardModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
