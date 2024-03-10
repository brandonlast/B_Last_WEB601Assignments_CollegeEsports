import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import contentArray from '../helper-files/contentDb';
import Content from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class CollegeEsportsService {
    constructor(private messageService: MessageService) {}

    getContentArray(): Observable<Content[]> {
        this.messageService.add('Content array loaded!');
        return of(contentArray);
      }

      getContentById(id: number): Observable<Content | undefined> {
        const contentItem = contentArray.find(item => item.id === id);
        if (contentItem) {
          this.messageService.add(`Content Item at id: ${id}`);
        }
        return of(contentItem);
      }
}