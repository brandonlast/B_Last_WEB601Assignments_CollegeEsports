import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Content from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentTypeFilterPipe } from '../pipes/content-filter.pipe';
import { ContentFilterModule } from '../pipes/content-filter.component';
import { FormsModule } from '@angular/forms';
import { CollegeEsportsService } from '../services/college-esports.service';
import { ModifyContentComponent } from '../modify-content/modify-content.component'


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FormsModule, ContentFilterModule, ModifyContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})


export class ContentListComponent implements OnInit {
  contentItems: Content[] = [];
    searchTitle: string = '';
    searched: boolean = false;
    titleExists: boolean = false;

    checkTitle(): void {
      this.searched = true;
      this.titleExists = this.contentItems.some(item => item.title === this.searchTitle);
    }


    constructor(private collegeEsportsService: CollegeEsportsService) {}

    ngOnInit(): void {
      this.getCollegeEsportsContent()
    }


    getCollegeEsportsContent(): void {
      this.collegeEsportsService.getContentArray().subscribe((contentArray: Content[]) => {
        this.contentItems = contentArray;
      });
    }


  

  
}
