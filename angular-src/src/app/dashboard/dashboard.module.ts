import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"

// services
import { DashboardApiService } from "./dashboard-api.service"

// components
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [DashboardViewComponent, DashboardHomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  exports: [
    DashboardViewComponent
  ],
  providers: [DashboardApiService],
  bootstrap: []
})
export class DashboardModule { }
