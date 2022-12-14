import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutRoutingModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class MainLayoutModule { }
