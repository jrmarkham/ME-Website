import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ShareDataService {
  private coreData = new BehaviorSubject<object>(new Object());
  currentCoreData = this.coreData.asObservable();
  private page = new BehaviorSubject<string>('');
  currentPage = this.page.asObservable();
  private newsIdx = new BehaviorSubject<number>(1);
  currentNewsIdx = this.newsIdx.asObservable();

  constructor() {
  }

  setCoreData(data: object) {
    this.coreData.next(data);
  }

  setPageData(data: string) {
    this.page.next(data);
  }

  setNewsData(idx: number) {
    this.newsIdx.next(idx);
  }
}
