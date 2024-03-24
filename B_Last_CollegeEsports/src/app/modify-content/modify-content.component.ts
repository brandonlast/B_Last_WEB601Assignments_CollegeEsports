import { Component, EventEmitter, Output } from '@angular/core';
import { CollegeEsportsService } from '../services/college-esports.service';
import Content from '../helper-files/content-interface';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
  };

  @Output() contentAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private collegeEsportsService: CollegeEsportsService,
    private messageService: MessageService
  ) {}

  addContent(): void {
    this.collegeEsportsService.getContentArray().subscribe(contents => {
      const ids: number[] = contents
        .filter(content => content.id !== null)
        .map(content => content.id as number); 
    
      const highestId = ids.length > 0 ? Math.max(...ids) : -1;
      this.newContent.id = highestId + 1;

      this.collegeEsportsService.addContent(this.newContent).subscribe(() => {
        this.messageService.add('Content added successfully.');
        this.clearInputs();
        this.contentAdded.emit();
      });
    });
  }

  clearInputs(): void {
    this.newContent = {
      id: null,
      title: '',
      description: '',
      creator: '',
    };
  }
}