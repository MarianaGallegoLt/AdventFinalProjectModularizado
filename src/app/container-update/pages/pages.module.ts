import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutRoutingModule } from '../layouts/main-layout/main-layout-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule,
    MainLayoutRoutingModule
  ]
})
export class PagesModule { }
