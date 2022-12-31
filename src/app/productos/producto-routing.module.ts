import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[
      {
        path:"agregar",
        component: AgregarComponent
      },
      {
        path:"listado",
        component:ListadoComponent
      },
      {
        path:"editar/:_id",
        component:EditarComponent
      },
      {
        path:"cart",
        component: CartComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProductoRoutingModule { }
