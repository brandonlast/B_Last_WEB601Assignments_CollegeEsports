import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import contentArray from '../helper-files/contentDb';
import Content from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegeEsportsService {

  private apiUrl = 'api/contents';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  
    getContentArray(): Observable<Content[]> {
        this.messageService.add('Content array loaded!');
        return this.http.get<Content[]>(this.apiUrl);
      }

      addContent(newContent: Content): Observable<Content> {
        return this.http.post<Content>(this.apiUrl, newContent, this.httpOptions);
      }

      getContentById(id: number): Observable<Content | undefined> {
        const url = `${this.apiUrl}/${id}`;
        this.messageService.add(`Content Item at id: ${id}`);
        return this.http.get<Content>(url);
      }
    }