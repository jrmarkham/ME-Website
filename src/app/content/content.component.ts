import {Component, OnInit} from '@angular/core';
import {ShareDataService} from '../service/share-data.service';
import {Router} from '@angular/router';
import {isNumeric} from 'tslint';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private data: ShareDataService, private router: Router) {
  }
  OTHER_NEWS_NODE = 'other_news';
  NEWS_LINKS_NODE = 'news_links';
  NEWS_FINAL_LINK_NODE = 'final_link';
  NEWS_COUNT = 'news_count';
  NEWS_TYPE = 'news';
  core: object;
  page: string;
  newsIdx: number;
  contents: Array<object>;
  async ngOnInit() {
    this.data.currentData.subscribe(coreData => this.setupData(coreData));
    this.data.currentNewsIdx.subscribe(idx => this.newsIdx = idx);
    this.data.currentPage.subscribe(pageData => {
      this.page = pageData;
      this.page === this.NEWS_TYPE ? this.buildNewsContent() : this.buildContent();

    });
  }

  setupData(coreData: object) {
    this.core = coreData;
  }

  buildContent() {

    console.log('build content');

    this.contents = [];
    this.contents.push(...this.core[this.page]);
  }

  updateNewPage(newsIdx: number) {
    if (this.newsIdx === (newsIdx - 1)) {return; }
    this.data.setNewsData(newsIdx - 1);
    const pageRoute = `/${this.page}:${newsIdx}`;
    this.router.navigateByUrl(pageRoute).then(ref => {
      this.buildNewsContent();
    });

 }

buildNewsContent() {
     console.log(' this.newsIdx ', this.newsIdx);

     this.contents = [];
     this.contents.push(...this.core[this.page][this.newsIdx].content);
     if (this.core[this.page][this.NEWS_COUNT] > 1) {
     this.contents.push(...this.core[this.page][this.OTHER_NEWS_NODE]);
     this.contents.push(...this.core[this.page][this.NEWS_LINKS_NODE]);
    }

     this.contents.push(...this.core[this.page][this.NEWS_FINAL_LINK_NODE]);
     console.log(' this.contents length ', this.contents.length);
     console.log(' this.contents ', this.contents);

  }
}
