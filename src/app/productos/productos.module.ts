import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoRoutingModule } from './producto-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { CartComponent } from './pages/cart/cart.component';




@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    MainComponent,
    ListadoComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductoRoutingModule,
    PipesModule,
    ComponentsModule,
  ]
})
export class ProductosModule { }
