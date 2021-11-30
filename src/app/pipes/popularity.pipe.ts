import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'popularity'
})
export class PopularityPipe implements PipeTransform {

  transform(popularity: number): string {
    if (popularity < 1 || popularity === null) {
      return 'Freezing'
    } else if (popularity === 1 || popularity === 2) {
      return 'Normal'
    } else if (popularity === 3 || popularity === 4) {
      return 'Popular'
    } else {
      return 'Sizzling hot!'
    }

  }
}
