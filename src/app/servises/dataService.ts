import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private currencySource = new BehaviorSubject<string>('USD');
  currentCurrency = this.currencySource.asObservable();

  changeCurrency(curr: string) {
    this.currencySource.next(curr);
  }
}