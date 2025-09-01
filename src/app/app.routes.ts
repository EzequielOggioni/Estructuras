import { Routes } from '@angular/router';
import { ProductoComponent } from './Paginas/producto/producto.component';
import { ListaProductoComponent } from './Paginas/lista-producto/lista-producto.component';
import { ListaBanderaComponent } from './Paginas/lista-bandera/lista-bandera.component';
import { UsuarioComponent } from './Paginas/usuario/usuario.component';
import { GmailauthComponent } from './Paginas/gmailauth/gmailauth.component';
import { DataFirestorageComponent } from './Paginas/data-firestorage/data-firestorage.component';
import { ChatComponent } from './Paginas/chat/chat.component';
import { autorizadoGuard, noAutorizadoGuard } from './guard/autorizado.guard';
import { GraficosComponent } from './Paginas/graficos/graficos.component';

export const routes: Routes = [
    { path: '', component: ChatComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'producto/:idProducto', component: ProductoComponent },
    { path: 'listaProducto', component: ListaProductoComponent },
    { path: 'banderas', component: ListaBanderaComponent, canActivate: [autorizadoGuard] },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'loguear', component: GmailauthComponent, canDeactivate: [noAutorizadoGuard] },
    { path: 'bbdd', component: DataFirestorageComponent },
    { path: 'grafico', component: GraficosComponent }
];
