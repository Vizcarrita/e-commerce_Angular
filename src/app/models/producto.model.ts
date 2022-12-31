import { environment } from '../../environments/environment';


interface _ProductoUser {
    _id:  string;
    name: string;
}

enum Categoria {
    Bebidas = "Bebidas",
    Tecnologia = "Tecnologia",
    Ropa = "Ropa",
    Musica = "Musica",
}

export class Producto {
    constructor(
        public name        : string,
        public categoria   : Categoria,
        public descripcion : string,
        public precio      : number,
        public _id?        : string,
        public img?        : string,
        public usuario?    : _ProductoUser,
    ){}
}