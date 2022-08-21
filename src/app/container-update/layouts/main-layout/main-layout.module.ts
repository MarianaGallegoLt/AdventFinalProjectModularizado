import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { PagesModule } from '../../pages/pages.module';
import { SharedModule } from '../../../shared/shared.module';
import { MainLayoutComponent } from './main-layout.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';



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
