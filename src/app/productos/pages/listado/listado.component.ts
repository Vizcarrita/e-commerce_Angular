import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto.model';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';
import { BusquedasService } from '../../../services/busquedas.service';
import { ModalInfoService } from 'src/app/services/modal-info.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  totalProductos: number = 0;
  productos: Producto[] = [];
  productosTemp: Producto[] = [];
  desde: number = 0;
  imgUrl = '';
  
  constructor(private productosService: ProductosService,
              private busquedasService: BusquedasService,
              private router: Router,
              private modalInfoService: ModalInfoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.productosService.getProductos( this.desde )
    .subscribe(({ total,producto }) => {
      this.totalProductos = total;
      this.productos = producto; 
      this.productosTemp = producto;
    })
  }


  borrar(_id:string){
    this.productosService.deleteProducto(_id)
    .subscribe(resp => {
      this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).
      then(()=> this.router.navigate(["productos/listado"]));
    })
  }

  cambiarPagina( valor: number ){
    this.desde += valor;

    if( this.desde < 0 ){
      this.desde = 0;
    }else if ( this.desde >= this.totalProductos ){
      this.desde -= valor;
    }
    this.cargarProductos()
  }


  buscar( termino: string ){

    if(termino.length === 0){
      return this.productos = this.productosTemp;
    }

    this.busquedasService.buscar('productos',termino)
    .subscribe( (resp:Producto[]) => {
      this.productos = resp;
    })
    return true;    
  }

  abrirModal( producto: Producto ){
    console.log(producto);
    this.modalInfoService.abrirModal('productos', producto._id!, producto.img, producto.name, producto.precio);
  }

}
