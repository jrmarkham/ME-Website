import {Component, OnInit} from '@angular/core';
import {Core} from './models/core';
import {PhpService} from './service/php.service';
import {ShareDataService} from './service/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  core: Core;

  constructor(private phpService: PhpService, private data: ShareDataService) {
   // this.getCore();
  }

  // run thru data loads
  ngOnInit() {
      this.getCore();
  }

  getCore(): void {
    this.phpService.getCore().subscribe(
      (res: Core) => {
        this.data.setCoreData(res);
      }, (err) => {
        console.log('ERROR: ', err.toString());
      });
  }
}
