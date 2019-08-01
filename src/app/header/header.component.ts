import {Component, Input, OnInit} from '@angular/core';
import {Core} from '../models/core';
import {ShareDataService} from '../service/share-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  core: Core;
  constructor(private data: ShareDataService) {}

  ngOnInit() {
    //this.core =

      this.data.currentCoreData.subscribe(coreData => this.core = coreData);
    console.log('header core ', this.core);
  }

}
