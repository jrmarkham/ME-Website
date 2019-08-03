import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ShareDataService {
  private data = new BehaviorSubject<object>(new Object());
  currentData = this.data.asObservable();
  private page = new BehaviorSubject<string>('');
  currentPage = this.page.asObservable();
  private newsIdx = new BehaviorSubject<number>(1);
  currentNewsIdx = this.newsIdx.asObservable();

  constructor() {
  }

  setCoreData(data: object) {
    this.data.next(data);
  }

  setPageData(data: string) {
    this.page.next(data);
  }

  setNewsData(idx: number) {
    this.newsIdx.next(idx);
  }
}
