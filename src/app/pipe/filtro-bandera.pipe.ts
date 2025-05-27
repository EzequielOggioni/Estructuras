import { Pipe, PipeTransform } from '@angular/core';
import { Bandera } from '../Clases/bandera';

@Pipe({
  name: 'filtroBandera'
})
export class FiltroBanderaPipe implements PipeTransform {

  transform(value :Array<Bandera>, filtro:string ): Array<Bandera> {
    return value.filter(f=> f.nombre.toLowerCase().indexOf(filtro.toLowerCase()) >= 0);
  }

}
