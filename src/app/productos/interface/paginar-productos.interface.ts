import { Producto } from "./productos.interface";

export interface PaginarProducto{
    total: number;
    producto: Producto[];
}