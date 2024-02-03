import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ContentList from '../helper-files/content-list';
import Content from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Saints COD',
      description: 'This is the St Clair College Call of Duty Team',
      creator: 'Zarin Bartholomew',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/17548ae6-caf3-4785-adbd-b3b179bd9af4/Ruper.png?format=300w',
      type: 'Team',
      tags: ['FPS', 'CallOfDuty']
    });

    this.contentList.add({
      id: 1,
      title: 'Saints VAL',
      description: 'This is the St Clair College Valorant Team',
      creator: 'Owen Mantha',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/816a41f9-498b-4b80-9b1b-ec6a698ec25a/Spoods+%281%29.png?format=300w',
      type: 'Team',
      tags: ['FPS', 'Valorant']
    });

    this.contentList.add({
      id: 1,
      title: 'Saints RL',
      description: 'This is the St Clair College Rocket League Team',
      creator: 'Isabella Taltolla',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/58869a29e4fcb5de2d6238bb/49df4e20-c150-419b-9031-cdf762d0a759/Emz.png?format=300w',
      type: 'Team',
      tags: ['Sports', 'RocketLeague']
    });
  }

  ngOnInit(): void {

  }
}
