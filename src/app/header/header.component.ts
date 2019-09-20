import {Component} from '@angular/core';
import {ShareDataService} from '../service/share-data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private data: ShareDataService, private router: Router) {}

  aboutPage() {
    const pageRoute = '?page=about';
    // check for news
    this.router.navigateByUrl(pageRoute).then(ref => {
      this.data.setPageData('about');
    });
  }
}
