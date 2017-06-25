import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../../app.routes";

// services
import { DataGeneratorsApiService } from "./data-generators-api.service"

// components
import { ObjectDataGeneratorComponent } from './components/object-data-generator/object-data-generator.component';
import { ArrayDataGeneratorComponent } from './components/array-data-generator/array-data-generator.component'

@NgModule({
  declarations: [ObjectDataGeneratorComponent, ArrayDataGeneratorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [DataGeneratorsApiService],
  bootstrap: []
})
export class DataGeneratorsModule { }
