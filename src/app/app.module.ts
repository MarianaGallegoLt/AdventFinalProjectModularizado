import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routing } from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerUpdateModule } from './container-update/container-update.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    BrowserAnimationsModule,
    ContainerUpdateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
