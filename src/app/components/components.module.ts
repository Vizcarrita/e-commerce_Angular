import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInfoComponent } from './modal-info/modal-info.component';



@NgModule({
  declarations: [
    ModalInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalInfoComponent,
  ]
})
export class ComponentsModule { }
