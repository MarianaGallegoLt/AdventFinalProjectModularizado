import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ContainerListComponent } from './pages/container-list/container-list.component';
import { RequestMoveComponent } from './pages/request-move/request-move.component';
import { PaymentProcessComponent } from './pages/payment-process/payment-process.component';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './pages/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    ContainerListComponent,
    RequestMoveComponent,
    PaymentProcessComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ContainerUpdateModule { }
