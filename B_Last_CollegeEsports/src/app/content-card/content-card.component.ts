import { Component, Input } from '@angular/core';
import Content from '../helper-files/content-interface';
import { ContentTypeFilterPipe } from '../pipes/content-filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content: Content | undefined;

  constructor() {
    
  }
  onImageClick(): void {
    if (this.content) {
      console.log(`Clicked on Image - ID: ${this.content.id}, Title: ${this.content.title}`);
    }
  }
  get tagsArray(): string[] {
    if (typeof this.content?.tags === 'string') {
      return [this.content?.tags];
    }
    return this.content?.tags || [];
  }

}

