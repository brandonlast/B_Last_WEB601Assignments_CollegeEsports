import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Content from '../helper-files/content-interface';
import { ContentFilterModule } from '../pipes/content-filter.component';
import { ContentTypeFilterPipe } from '../pipes/content-filter.pipe';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CreateContentComponent } from '../create-content/create-content.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FormsModule, ContentFilterModule, CreateContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})


export class ContentListComponent implements OnInit {
  contentItems: Content[] = [
    {
      id: 1,
      title: 'Saints COD',
      description: 'This is the St Clair College Call of Duty Team',
      creator: 'Zarin Bartholomew',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/17548ae6-caf3-4785-adbd-b3b179bd9af4/Ruper.png?format=300w',
      type: 'Varsity',
      tags: ['FPS', 'CallOfDuty']
    },
    {
      id: 2,
      title: 'Saints VAL',
      description: 'This is the St Clair College Valorant Team',
      creator: 'Owen Mantha',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/816a41f9-498b-4b80-9b1b-ec6a698ec25a/Spoods+%281%29.png?format=300w',
      type: 'Varsity',
      tags: ['FPS', 'Valorant']
    },
    {
      id: 3,
      title: 'Saints RL',
      description: 'This is the St Clair College Rocket League Team',
      creator: 'Isabella Taltolla',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/49df4e20-c150-419b-9031-cdf762d0a759/Emz.png?format=300w',
      type: 'Varsity',
      tags: ['Sports', 'RocketLeague']
    },
    {
      id: 4,
      title: 'Saints LOL',
      description: 'This is the St Clair College League Of Legends Team',
      creator: 'Alonso Dvir',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/e498b718-9666-45bb-af5a-3814d3dd628b/Alonso.png?format=300w',
      type: 'Varsity',
      tags: ['MOBA', 'LeagueOfLegends']
    },
    {
      id: 5,
      title: 'Saints OW',
      description: 'This is the St Clair College Overwatch Team',
      creator: 'Robinpreet Sidhu',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/67e5775e-4d71-452e-8429-05f7b6be6361/Reyzr+%281%29.png?format=300w',
      type: 'Varsity',
      tags: ['FPS', 'Overwatch']
    },
    {
      id: 6,
      title: 'Saints FGC',
      description: 'This is the St Clair College Fighting Game Team',
      creator: 'Daneil Brown',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/93036509-3482-4c27-8912-8305f3416078/OneDayOut.png?format=300w',
      type: 'Academy',
      tags: ['Fighting', 'Tekken']
    },
    {
      id: 7,
      title: 'Zarin Bartholomew',
      description: 'This is the St Clair College Call of Duty Team Coach',
      creator: 'Zarin Bartholomew',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/c648a34a-ec5b-4c41-bbcb-222ee999a703/Zaarin.png?format=300w',
      type: '',
      tags: ['FPS', 'CallOfDuty']
    },
    {
      id: 8,
      title: 'Justin Parent',
      description: 'This is the St Clair College Call of Duty Team Captain',
      creator: 'Dawson Lovell',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/095e5194-7265-4eec-a159-1618b90954ad/Priestly.png?format=300w',
      tags: ['FPS', 'CallOfDuty']
    },
    {
      id: 8,
      title: 'Francis Biller',
      description: 'This is the St Clair College Call of Duty Team Player',
      creator: 'Brandon Last',
      tags: ['FPS', 'CallOfDuty']
    },
    {
      id: 8,
      title: 'Trent Sovran',
      description: 'This is the St Clair College Call of Duty Team Analyst',
      creator: 'Dawson Lovell',
      tags: ['FPS', 'CallOfDuty']
    }
  ];
    searchTitle: string = '';
    searched: boolean = false;
    titleExists: boolean = false;

    checkTitle(): void {
      this.searched = true;
      this.titleExists = this.contentItems.some(item => item.title === this.searchTitle);
    }


  constructor() {}

  ngOnInit(): void {
  }
  
  onContentAdded(newContent: Content) {
    this.contentItems = [...this.contentItems, newContent];
  }
}
