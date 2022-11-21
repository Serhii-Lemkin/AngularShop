import Product from '../models/product';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DBURL = 'http://localhost:4100/Products/';

@Injectable()
export default class ProductService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(DBURL);
  }
  post(product: Product) {
    return this.httpClient.post(DBURL, product);
  }
  put(product: Product) {
    return this.httpClient.put(DBURL + product.id, product);
  }
  delete(id: number) {
    return this.httpClient.delete(DBURL + id);
  }
  getById(id: number) {
    return this.httpClient.get(DBURL + id);
  }
}
