import { Component } from '@angular/core';
import { BanderasService } from '../../servicios/banderas.service';
import { BanderaComponent } from "../bandera/bandera.component";
import { CommonModule } from '@angular/common';
import { FiltroBanderaPipe } from "../../pipe/filtro-bandera.pipe";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FiltrocontinentePipe } from '../../pipe/filtrocontinente.pipe';
import { Bandera } from '../../Clases/bandera';
import { interval } from 'rxjs';

@Component({
  selector: 'app-lista-bandera',
  imports: [BanderaComponent, CommonModule, FiltroBanderaPipe, FormsModule, FiltrocontinentePipe],
  templateUrl: './lista-bandera.component.html',
  styleUrl: './lista-bandera.component.css'
})
export class ListaBanderaComponent {

  public filtro: string = "";
  public paisMisterioso!: Bandera;
  public continente: string = "";
  public continentes: Array<string> = ['Todos'];
  public jugando: boolean = false;
  public tiempo: number = 10;
  intervalo: any;

  constructor(public lista: BanderasService) {
    setTimeout(() => {
      this.lista.banderas.forEach(f => {
        if (!this.continentes.some(c => f.continente == c))
          this.continentes.push(f.continente);
      })
    }, 300);
  }


  public comezar() {
    this.tiempo = 10;
    this.paisMisterioso = this.lista.banderas[Math.round(Math.random() * this.lista.banderas.length)]
    this.jugando = true;
    this.intervalo = setInterval(()=> {
      this.tiempo--;
      if(this.tiempo ==0 )
      {
        this.jugando= false
        alert("perdiste");
        clearInterval(this.intervalo);
      }
    },1000 )

    
  }

  public elegir(intento: Bandera) {
    if (intento.nombre == this.paisMisterioso.nombre) {
      this.jugando = false;
      clearInterval(this.intervalo);
      alert("Ganaste");

    }
  }

}
