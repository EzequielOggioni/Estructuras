import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bandera } from '../Clases/bandera';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {

  public banderas: Array<Bandera> = [];

  constructor(public http: HttpClient) {
    http.get('https://restcountries.com/v3.1/all').subscribe({
      next: (data) => {
        this.banderas = [];
        (<Array<any>>data).forEach(f => this.banderas.push({ nombre: f.name.common, bandera: f.flags.svg, continente: f.continents[0] }));
      },
      error: (error) => { console.log(error); alert(error.status) }
    }
    );
    http.get("https://egos-facturaapi.mdbgo.io/Todos/").subscribe(
      {
        next:(data) => console.info(data),
        error:(err) => console.log(err)
      }
    )
  }


}
