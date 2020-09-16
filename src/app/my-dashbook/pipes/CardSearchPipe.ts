import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/model/dashbook/card';

@Pipe({
  name: 'cardFilter'
})
export class CardFilterPipe implements PipeTransform {

  transform(items: Card[], searchValue: string): Card[] {
    if ( items === null || searchValue === null || searchValue === '' ) {
      return items;
    }
    else {
      searchValue = searchValue.toLowerCase();
      return items.filter(item => {
        return item.title.toLowerCase().includes(searchValue);
      });
    }
  }
}
