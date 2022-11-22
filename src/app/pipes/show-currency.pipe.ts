import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showCurrency',
})
export class ShowCurrencyPipe implements PipeTransform {
  transform(value: number, currency: string): unknown {
    if (currency === 'USD') {
      return '$' + value;
    }
    if (currency === 'ILS') {
      return '₪' + Math.floor(value * 3.5);
    }
    return '$' + value;
  }
}
