import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'popularity'
})
export class PopularityPipe implements PipeTransform {

  transform(popularity: number): string {

    switch (popularity) {
      case null:
      case 0:
        return 'Freezing'
      case 1:
      case 2:
        return 'Normal'
      case 3:
      case 4:
        return "Popular"
      default:
        return "Sizzling hot!"
    }
  }
}
