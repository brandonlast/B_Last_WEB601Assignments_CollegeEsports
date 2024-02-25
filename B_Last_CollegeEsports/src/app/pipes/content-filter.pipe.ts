import { Pipe, PipeTransform } from '@angular/core';
import Content from '../helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {
  transform(contentArray: Content[], filterType?: string): Content[] {
    if (!filterType) {
      return contentArray.filter(content => !content.type);
    }
    return contentArray.filter(content => content.type === filterType);
  }
}
