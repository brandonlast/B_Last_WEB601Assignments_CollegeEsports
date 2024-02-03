import { Component, Input } from '@angular/core';
import Content from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
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

}
