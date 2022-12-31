export interface Producto {
    _id?        : string;
    name        : string;
    categoria   : Categoria;
    descripcion : string;
    precio      : number;
    img?        : string;
    usuario?    : Usuario;

}

export interface Usuario {
    _id:  string;
    name: string;
}

export enum Categoria {
    Bebidas = "Bebidas",
    Tecnologia = "Tecnologia",
    Ropa = "Ropa",
    Musica = "Musica",
}

//OLD interface

// export interface Producto{
//     _id?:     string;
//     name:   string;
//     categoria: Categoria;
//     descripcion: string;
//     precio: number
// }

// export enum Categoria {
//     Bebidas = "Bebidas",
//     Tecnologia = "Tecnologia",
//     Ropa = "Ropa",
//     Musica = "Musica",
// }
