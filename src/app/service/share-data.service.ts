import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Core} from '../models/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ShareDataService {
  private coreData = new BehaviorSubject<Core>(Core);
  currentCoreData = this.coreData.asObservable();
  private page = new BehaviorSubject<string>('');
  currentPage = this.page.asObservable();
  private newsIdx = new BehaviorSubject<number>(1);
  currentNewsIdx = this.newsIdx.asObservable();

  constructor() {
  }

  setCoreData(data: Core) {
    this.coreData.next(data);
  }

  setPageData(data: string) {
    this.page.next(data);
  }

  setNewsData(idx: number) {
    this.newsIdx.next(idx);
  }
}
