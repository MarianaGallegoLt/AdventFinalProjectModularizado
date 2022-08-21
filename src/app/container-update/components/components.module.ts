import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersTableComponent } from './container-list-components/containers-table/containers-table.component';
import { ItemsTableComponent } from './payment-components/items-table/items-table.component';
import { PaymentCardComponent } from './payment-components/payment-card/payment-card.component';
import { PaymentInformationComponent } from './payment-components/payment-information/payment-information.component';
import { RequestMoveTableComponent } from './request-move-components/request-move-table/request-move-table.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContainersTableComponent,
    ItemsTableComponent,
    PaymentCardComponent,
    PaymentInformationComponent,
    RequestMoveTableComponent
  ],
  exports: [
    ContainersTableComponent,
    ItemsTableComponent,
    PaymentCardComponent,
    PaymentInformationComponent,
    RequestMoveTableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class ComponentsModule { }
