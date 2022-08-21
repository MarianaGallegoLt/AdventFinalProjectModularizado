// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ContainerListComponent } from './container-update/pages/container-list/container-list.component';
// import { IndexComponent } from './container-update/pages/index/index.component';
// import { LoginComponent } from './container-update/pages/login/login.component';
// import { PaymentProcessComponent } from './container-update/pages/payment-process/payment-process.component';
// import { RequestMoveComponent } from './container-update/pages/request-move/request-move.component';

// const routes: Routes = [
//     // {
//     //     path: '',
//     //     component: IndexComponent
//     // },
//     // {
//     //     path: 'login',
//     //     component: LoginComponent
//     // },
//     // {
//     //     path: 'container-list',
//     //     component: ContainerListComponent
//     // },
//     // {
//     //     path: 'request-move',
//     //     component: RequestMoveComponent
//     // },
//     // {
//     //     path: 'payment-process',
//     //     component: PaymentProcessComponent
//     // }

//     {
//         path: '',
//         pathMatch: 'full',
//         redirectTo: 'index',
//       },
//       {
//         path: '',
//         loadChildren: () =>
//             import('./container-update/layouts/main-layout/main-layout.module')
//                 .then((m) => m.MainLayoutModule),
//       },
//       {
//         path: 'login',
//         component: LoginComponent,
//       },
//       {
//         path: 'index',
//         component: IndexComponent
//       }
// ];

// export const Routing = RouterModule.forRoot(routes);