import { ShowCurrencyPipe } from './show-currency.pipe';

describe('ShowCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new ShowCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
