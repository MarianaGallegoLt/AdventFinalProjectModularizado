import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './container-update/pages/index/index.component';
import { LoginComponent } from './container-update/pages/login/login.component';

const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index',
      },
      {
        path: '',
        loadChildren: () =>
            import('./container-update/layouts/main-layout/main-layout.module')
                .then((m) => m.MainLayoutModule),
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'index',
        component: IndexComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }