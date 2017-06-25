import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"

// modules
import { DataGeneratorsModule } from "./data-generators/data-generators.module"

// services
import { DashboardApiService } from "./dashboard-api.service"

// components
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardNotificationBarComponent } from './components/dashboard-notification-bar/dashboard-notification-bar.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';

@NgModule({
  declarations: [DashboardViewComponent, DashboardHomeComponent, DashboardNotificationBarComponent, DashboardNavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataGeneratorsModule,
    router
  ],
  exports: [
    DashboardViewComponent
  ],
  providers: [DashboardApiService],
  bootstrap: []
})
export class DashboardModule { }
