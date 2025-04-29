import { Component } from '@angular/core';
import { Producto } from '../../Clases/producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  public miProducto!: Producto;

  constructor(public activeRoute: ActivatedRoute) {
   
    this.activeRoute.paramMap.subscribe(
      param => {
        let idParametro = param.get("idProducto") ?? "";
        if (idParametro == "")
          this.miProducto = new Producto();
        else {
          let productos: Array<Producto> = JSON.parse(localStorage.getItem("productos") ?? '[]');
          this.miProducto = productos.filter(prod => prod._id.toString() == idParametro)[0]?? new Producto();
        }
      }
    );
  }

  public guardar() {
    let productos: Array<Producto> = JSON.parse(localStorage.getItem("productos") ?? '[]');
   if(this.miProducto._id){
    let anterior = productos.filter(prod => prod._id == this.miProducto._id)[0];
    anterior._nombre = this.miProducto._nombre;
    anterior._moneda = this.miProducto._moneda;
    anterior._precio = this.miProducto._precio;
    anterior._tipoProducto = this.miProducto._tipoProducto;
   }else{
     this.miProducto.id = productos.length + 1;
     productos.push(this.miProducto);
   }
    localStorage.setItem('productos', JSON.stringify(productos));
  }

  public limpiar() {
    this.miProducto = new Producto();
  }
}
