import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/model/dashbook/card';
import { Group } from 'src/app/model/dashbook/group';

@Pipe({
  name: 'groupFilter'
})
export class GroupFilterPipe implements PipeTransform {

  transform(items: Group[], searchValue: string): Group[] {
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
