import {Component, OnInit} from '@angular/core';
import {PhpService} from './service/php.service';
import {ShareDataService} from './service/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  core: object;

  constructor(private phpService: PhpService, private data: ShareDataService) {
   // this.getCore();
  }

  // run thru dataObject loads
  ngOnInit() {
      this.getCore();
  }

  getCore(): void {
    this.phpService.getCore().subscribe(
      (res: object) => {
        this.data.setCoreData(res);
      }, (err) => {
        console.log('ERROR: ', err.toString());
      });
  }
}
