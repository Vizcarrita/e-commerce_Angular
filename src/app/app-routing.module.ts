import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './auth/guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import("./auth/auth.module").then( m => m.AuthModule )
  },
  {
    path:"productos",
    loadChildren:() => import("./productos/productos.module").then( m => m.ProductosModule ),
    canActivate:[ ValidarTokenGuard ],
    canLoad:[ ValidarTokenGuard ]
  },
  {
    path:"**",
    redirectTo:"auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
