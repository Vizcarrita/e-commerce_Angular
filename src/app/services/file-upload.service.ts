import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';


const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async actualizarFoto( 
    archivo: File,
    tipo:'usuarios'|'productos',
    id:string
   ){
    try {
      const url = `${ base_url }/upload/${ tipo }/${ id }`;
      const formData = new FormData();
      formData.append('imagen', archivo);

      const resp = await fetch(url, {
        method:'PUT',
        headers:{
          'x-token':localStorage.getItem('token') || ''
        },
        body: formData
      });
      const data = await resp.json();
      console.log(data);

      return 'nombre de la imagen';

    } catch (error) {
      console.log(error);
      return false ;
    }
  };

}
