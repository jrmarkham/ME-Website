import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss', './header.component.scss']
})
export class HeaderComponent implements OnInit {
  // coreData;
  //
  // constructor(private firebaseService: PhpService) {
  // }

  ngOnInit(): void {
    // this.coreData = this.firebaseService.getCoreData();
    // console.log('get data');
    // console.log(this.coreData);
  }
}
