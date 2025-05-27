import { Routes } from '@angular/router';
import { ProductoComponent } from './Paginas/producto/producto.component';
import { ListaProductoComponent } from './Paginas/lista-producto/lista-producto.component';
import { ListaBanderaComponent } from './Paginas/lista-bandera/lista-bandera.component';

export const routes: Routes = [
    { path: '', component: ProductoComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'producto/:idProducto', component: ProductoComponent },
    { path: 'listaProducto', component: ListaProductoComponent },
    { path: 'banderas', component: ListaBanderaComponent },
];
