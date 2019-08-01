import {Component, OnInit} from '@angular/core';
import {Core} from '../models/core';
import {ShareDataService} from '../service/share-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private data: ShareDataService) {
  }
  OTHER_NEWS_NODE = 'other_news';
  NEWS_LINKS_NODE = 'news_links';
  NEWS_COUNT = 'news_count';
  NEWS_TYPE = 'news';
  core: Core;
  page: string;
  newsIdx: number;
  contents: Array<object>;

  ngOnInit() {

    this.data.currentCoreData.subscribe(coreData => this.core = coreData);
    this.data.currentNewsIdx.subscribe(idx => this.newsIdx = idx);
    this.data.currentPage.subscribe(pageData => {
      this.page = pageData;
      this.page === this.NEWS_TYPE ? this.buildNewsContent() : this.buildContent();
    });
    console.log('header core ', this.core);
  }

  buildContent() {
    this.contents = [];
    this.contents.push(...this.core[this.page]);
  }

  updateNewPage(newsIdx: number) {
    if (this.newsIdx === (newsIdx - 1)) {return; }
    this.data.setNewsData(newsIdx - 1);
    this.buildNewsContent();
  }

  buildNewsContent() {
     console.log(' this.newsIdx ', this.newsIdx);

     this.contents = [];
     this.contents.push(...this.core[this.page][this.newsIdx].content);
     console.log(' this.contents length ', this.contents.length);
     console.log(' this.contents ', this.contents);
     if (this.core[this.page][this.NEWS_COUNT] > 1) {
     this.contents.push(...this.core[this.page][this.OTHER_NEWS_NODE]);
     this.contents.push(...this.core[this.page][this.NEWS_LINKS_NODE]);
    }
     console.log(' this.contents length ', this.contents.length);
     console.log(' this.contents ', this.contents);

  }
}
