import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ContainerListComponent } from './pages/container-list/container-list.component';
import { RequestMoveComponent } from './pages/request-move/request-move.component';
import { PaymentProcessComponent } from './pages/payment-process/payment-process.component';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { PaymentInformationComponent } from './components/payment-components/payment-information/payment-information.component';
import { PaymentCardComponent } from './components/payment-components/payment-card/payment-card.component';
import { ItemsTableComponent } from './components/payment-components/items-table/items-table.component';
import { ContainersTableComponent } from './components/container-list-components/containers-table/containers-table.component';
import { SharedModule } from '../shared/shared.module';
import { RequestMoveTableComponent } from './components/request-move-components/request-move-table/request-move-table.component';
import { Routing } from '../app-routing-module';
import { IndexComponent } from './pages/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ContainerListComponent,
    RequestMoveComponent,
    PaymentProcessComponent,
    PaymentInformationComponent,
    PaymentCardComponent,
    ItemsTableComponent,
    ContainersTableComponent,
    RequestMoveTableComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    Routing,
    ReactiveFormsModule

  ]
})
export class ContainerUpdateModule { }
