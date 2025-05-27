import { Pipe, PipeTransform } from '@angular/core';
import { Bandera } from '../Clases/bandera';

@Pipe({
  name: 'filtrocontinente'
})
export class FiltrocontinentePipe implements PipeTransform {

  transform(value :Array<Bandera>, filtro:string ): Array<Bandera> {
    if(filtro == "" || filtro.toLowerCase() == "todos"  )
      return value;

    return value.filter(f=> f.continente.toLowerCase() == filtro.toLowerCase());
  }

}
