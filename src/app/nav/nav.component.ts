import {Component, OnInit} from '@angular/core';
import {ShareDataService} from '../service/share-data.service';
import {Event as NavigationEvent, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  nav: Array<string>;
  core: object;
  newsCount;
  NEWS = 'news';

  constructor(private data: ShareDataService, private router: Router) {

    // router.events.subscribe() => this.browserNavigation(event);
    router.events
      .pipe(
        filter(
        (event: NavigationEvent) => {
          return (event instanceof NavigationStart);
        }
        )
      ).subscribe(
      (event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.routePage();
        }
      }
    );
  }

  ngOnInit() {
    this.data.currentData.subscribe(coreData => this.setupData(coreData));
  }

  setupData(coreData: object) {
    this.core = coreData;
    const NAV = 'nav';
    this.nav = Array();
    // tslint:disable-next-line:forin
    for (const key in this.core[NAV]) {
      this.nav.push(this.core[NAV][key].name);
    }

    const NEWS_COUNT = 'news_count';
    // tslint:disable-next-line:forin
    for (const key in this.core[this.NEWS]) {
      if (key === NEWS_COUNT) {
        this.newsCount = this.core[this.NEWS][key];
        break;
      }
    }
    this.routePage();
  }
  routePage() {
    //  check url for route
    const item = window.location.href.split('?page=')[1];

    if (item === undefined) {
      return;
    }
    console.log('item', item);

    const itemParts = item.split(':');
    const pageData = itemParts[0];
    let newsDataNum = itemParts[1] === undefined ? this.newsCount : Number(itemParts[1]);

    if (!this.nav.includes(pageData)) {
      console.log('!this.nav.includes(pageData)');
      return;
    }

    let pageRoute = `?page=${pageData}`;
    // check for news
    if (this.NEWS === pageData) {
      if (newsDataNum < 0 || newsDataNum > this.newsCount) {
        newsDataNum = this.newsCount;
      }

      this.data.setNewsData(newsDataNum - 1);
      pageRoute = `?page=${pageData}:${newsDataNum}`;
    }

    this.router.navigateByUrl(pageRoute).then(ref => {
      console.log('set page data under navigate by url');
      this.data.setPageData(pageData);
    });
  }


  updatePage(pageData: string) {
    let pageRoute = `?page=${pageData}`;
    // check for news
    if (this.NEWS === pageData) {
      this.data.setNewsData(this.newsCount - 1);
      pageRoute = `?page=${pageData}:${this.newsCount}`;
    }

    this.router.navigateByUrl(pageRoute).then(ref => {
      this.data.setPageData(pageData);
    });
  }

}
