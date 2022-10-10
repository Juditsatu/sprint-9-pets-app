import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mimos/mimos.module').then( m => m.MimosModule )
  },
  {
    path: '',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule )
  },
  {
    path: 'member',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
