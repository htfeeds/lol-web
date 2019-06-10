import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { RoleGuardService } from './shared/guards/role-guard.service';
import { UnauthGuardService } from './shared/guards/unauth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuardService, RoleGuardService],
    data: { authority: 'ROLE_ADMIN' }
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [UnauthGuardService]
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule',
    canActivate: [UnauthGuardService]
  },
  {
    path: 'forgot-password',
    loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
  },
  {
    path: '404',
    loadChildren: './not-found-page/not-found-page.module#NotFoundPageModule'
  },
  {
    path: '500',
    loadChildren: './internal-server-error/internal-server-error.module#InternalServerErrorModule'
  },
  {
    path: '**',
    loadChildren: './not-found-page/not-found-page.module#NotFoundPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
