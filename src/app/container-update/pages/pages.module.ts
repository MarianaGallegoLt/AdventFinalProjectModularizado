import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerListComponent } from './container-list/container-list.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { RequestMoveComponent } from './request-move/request-move.component';
import { ComponentsModule } from '../components/components.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutRoutingModule } from '../layouts/main-layout/main-layout-routing.module';



@NgModule({
  declarations: [
    // ContainerListComponent,
    // IndexComponent,
    // LoginComponent,
    // PaymentProcessComponent,
    // RequestMoveComponent
  ],
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
