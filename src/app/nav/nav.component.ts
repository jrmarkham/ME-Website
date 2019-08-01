import { Component, OnInit } from '@angular/core';
import {Core} from '../models/core';
import {ShareDataService} from '../service/share-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  core: Core;
  constructor(private data: ShareDataService) {}

  ngOnInit() {
   // this.core =
      this.data.currentCoreData.subscribe(coreData => this.core = coreData);
    console.log('header core ', this.core);
  }

  updatePage(pageData: string) {
    console.log('new page ', pageData );
    this.data.setPageData(pageData);
  }
}
