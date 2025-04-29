import { Component } from '@angular/core';
import { Producto } from '../../Clases/producto';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  imports: [MatListModule, CommonModule,MatCardModule, MatIconModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  public productos: Array<Producto>;

  constructor(public route:Router) {
    this.productos = JSON.parse(localStorage.getItem("productos") ?? '[]');
  }

  public editar(id:number){
    this.route.navigateByUrl("producto/" + id.toString());
  }
}
