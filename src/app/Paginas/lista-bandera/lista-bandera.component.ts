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

@Component({
  selector: 'app-lista-bandera',
  imports: [BanderaComponent, CommonModule, FiltroBanderaPipe, FormsModule,FiltrocontinentePipe],
  templateUrl: './lista-bandera.component.html',
  styleUrl: './lista-bandera.component.css'
})
export class ListaBanderaComponent {

  public filtro: string = "";
  public continente: string = "";
  public continentes: Array<string> = ['Todos'];
  constructor(public lista: BanderasService) {
    setTimeout(() => {
      this.lista.banderas.forEach(f => {
        if (!this.continentes.some(c => f.continente == c))
          this.continentes.push(f.continente);
      })
    }, 40);
  }


}
