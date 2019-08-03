import {Component, OnInit} from '@angular/core';
import {ShareDataService} from '../service/share-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  nav: Array<string>;
  core: object;
  constructor(private data: ShareDataService) {}

  ngOnInit() {
    const NAV = 'nav';
    this.data.currentData.subscribe(coreData => {
      this.nav = coreData[NAV];
      this.core = coreData;
    });
  }

  updatePage(pageData: string) {
    const NEWS_COUNT = 'news_count';
    if ('news' === pageData) {
      this.data.setNewsData(this.core[pageData][NEWS_COUNT] - 1);
    }
    this.data.setPageData(pageData);
  }
}
