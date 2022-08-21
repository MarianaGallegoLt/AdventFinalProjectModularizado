import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerListComponent } from '../../pages/container-list/container-list.component';
import { PaymentProcessComponent } from '../../pages/payment-process/payment-process.component';
import { RequestMoveComponent } from '../../pages/request-move/request-move.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
          {
            path: 'container-list',
            component: ContainerListComponent,
          },
          {
            path: 'request-move',
            component: RequestMoveComponent,
          },
          {
            path: 'payment-process',
            component: PaymentProcessComponent,
          },
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }