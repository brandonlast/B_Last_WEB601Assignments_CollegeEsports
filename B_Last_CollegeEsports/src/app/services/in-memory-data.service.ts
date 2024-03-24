import { Injectable } from '@angular/core';
import Content from '../helper-files/content-interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contents: Content[] = [];
    return { contents };
  }

  genId(contents: Content[]): number {
    const validIds: number[] = contents
      .filter(content => content.id !== null)
      .map(content => content.id as number);
    
    return validIds.length > 0 ? Math.max(...validIds) + 1 : 1;
  }
}
