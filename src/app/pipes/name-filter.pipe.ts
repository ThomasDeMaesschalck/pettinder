import {Pipe, PipeTransform} from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], nameToFilterOn: string): any[] {
    nameToFilterOn.toLocaleLowerCase();

    return pets.filter(pet => {return pet.name.toLocaleLowerCase().includes(nameToFilterOn)});
  }

}
