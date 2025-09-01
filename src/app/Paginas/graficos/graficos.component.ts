import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  Chart, ChartConfiguration, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip,
  Legend,
  PieController,
  ArcElement
} from 'chart.js';

// Registrá los componentes necesarios
Chart.register(  BarController,
  BarElement,  CategoryScale,  LinearScale,  Title,  Tooltip,  Legend,  PieController,  ArcElement
);


@Component({
  selector: 'app-graficos',
  imports: [CommonModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myChartPie') myChartPie!: ElementRef<HTMLCanvasElement>;
  public mostrar: boolean = true;
  private configBar!: ChartConfiguration
  private configPie!: ChartConfiguration
  constructor() {

    let valores = [{nombre:'Red',votos:12},{nombre:'Blue',votos:19},{nombre:'Yellow',votos:9},
      {nombre:'Greeb',votos:15},{nombre:'Orange',votos:3}]
    this.configBar = {
      type: 'bar',
      data: {
        labels: valores.map(t=> t.nombre) ,
        datasets: [{
          label: 'miTitulo',
          data: valores.map(t=> t.votos),
          borderWidth: 1
        }]
      }

    };
    this.configPie = {
      type: 'pie',
      data: {
        labels: valores.map(t=> t.nombre),
        datasets: [{
          label: 'My First Dataset',
          data: valores.map(t=> t.votos),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(54, 16, 235)',
            'rgb(25, 05, 86)'
          ],
          hoverOffset: 4
        }]
      }
    };
  }

  grafico() {


    this.mostrar = false;
    new Chart(this.myChart.nativeElement, this.configBar);
    new Chart(this.myChartPie.nativeElement, this.configPie);
    this.mostrar = true;
  }

}