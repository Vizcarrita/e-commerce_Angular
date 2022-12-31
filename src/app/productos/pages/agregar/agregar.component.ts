import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {

  miFormulario: FormGroup = this.fb.group({
    name:[,[Validators.required]],
    categoria:["",],
    precio:[,[Validators.required]],
    descripcion:[,[Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private productosService: ProductosService,
              private router: Router) { }
  
  guardar(){
    this.productosService.addNewProducto( this.miFormulario.value ).subscribe();
    Swal.fire({
      icon: 'success',
      title: 'Producto Registrado',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl("productos/listado");
  }            

}
