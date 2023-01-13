import { Component, Input, OnInit,  } from '@angular/core';
import { ModalInfoService } from '../../services/modal-info.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  
  public imgTemp: any = null;

  constructor(public modalInfoService: ModalInfoService ) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalInfoService.cerrarModal();
  }

}
