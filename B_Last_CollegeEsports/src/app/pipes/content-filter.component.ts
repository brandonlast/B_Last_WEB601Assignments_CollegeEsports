import { NgModule } from '@angular/core';
import { ContentTypeFilterPipe } from './content-filter.pipe';

@NgModule({
  declarations: [ContentTypeFilterPipe],
  exports: [ContentTypeFilterPipe]
})
export class ContentFilterModule {}
