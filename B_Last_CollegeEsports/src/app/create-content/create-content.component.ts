import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Content from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };
  errorMessage!: string;


  submitContent(): Promise<void> {
    return new Promise((resolve, reject) => {
    if (this.newContent.title.trim() !== '') {
      this.errorMessage = '';
      console.log('Content added successfully:', this.newContent.title);
      this.contentAdded.emit(this.newContent);
      this.newContent = {
        id: 0,
        title: '',
        description: '',
        creator: '',
        imgURL: '',
        type: '',
        tags: []
      };
  }else {
      this.errorMessage = 'Content could not be added.';
      reject();
    }
  });
}
}
