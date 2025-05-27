import { Component, Input } from '@angular/core';
import { Bandera } from '../../Clases/bandera';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bandera',
  imports: [CommonModule],
  templateUrl: './bandera.component.html',
  styleUrl: './bandera.component.css'
})
export class BanderaComponent {
  @Input()
  public pais!: Bandera;

}
