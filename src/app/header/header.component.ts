import {Component, Input, OnInit} from '@angular/core';
import {ShareDataService} from '../service/share-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  subtitle: string;
  constructor(private data: ShareDataService) {}

  ngOnInit() {
    const TITLE = 'title';
    const SUBTITLE = 'subtitle';
    this.data.currentCoreData.subscribe(coreData => {
      this.title = coreData[TITLE];
      this.subtitle = coreData[SUBTITLE];
    });
  }

}
