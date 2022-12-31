import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../interface/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  producto!:Producto;
  
  miFormulario: FormGroup = this.fb.group({
    name:[,[Validators.required]],
    categoria:[],
    precio:[,[Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private productosServices: ProductosService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({ _id }) => this.cargarProducto(_id) );
  }

  cargarProducto(_id:string){
      this.productosServices.getProductoPorId(_id)
      .subscribe( producto => {
        this.producto = producto;
        const { name,categoria,precio } = producto;
        this.miFormulario.setValue({name,categoria,precio})
      })
  }

  editarProducto(){
    const data = {
      ...this.miFormulario.value,
      _id : this.producto._id
    }
    this.productosServices.updateProducto( data )
    .subscribe ( resp => {
      Swal.fire({
        icon: 'success',
        title: 'Actualizado con exito!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl("productos/listado");
    })
  }

}
