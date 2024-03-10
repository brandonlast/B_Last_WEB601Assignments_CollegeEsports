import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Content from './helper-files/content-interface';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentTypeFilterPipe } from './pipes/content-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './hover.directive';
import { CollegeEsportsService } from './services/college-esports.service';
import { MessageService } from './messages/messages.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentCardComponent, ContentListComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'B_Last_CollegeEsports';
  topContent: Content | undefined;

  constructor(private collegeEsportsService: CollegeEsportsService) {}

  ngOnInit(): void {
    this.addTopContent();
  }

  addTopContent(): void {
    const contentIdToAdd = 1; 
    this.collegeEsportsService.getContentById(contentIdToAdd).subscribe((contentItem: Content | undefined) => {
      this.topContent = contentItem;
    });
  }
}
