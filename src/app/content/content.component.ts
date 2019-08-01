import {Component, OnInit} from '@angular/core';
import {Core} from '../models/core';
import {ShareDataService} from '../service/share-data.service';
import {element} from 'protractor';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  core: Core;
  page: string;
  contents: Array<object>;
  constructor(private data: ShareDataService) {}

  ngOnInit() {
    this.data.currentCoreData.subscribe(coreData => this.core = coreData);
    this.data.currentPage.subscribe(pageData => {
      this.page = pageData;
      this.buildContent(); });
    console.log('header core ', this.core);
  }

  buildContent() {
    this.contents = [];
    this.contents.push(...this.core[this.page]);
    // console.log(' build content ');
  }
}
