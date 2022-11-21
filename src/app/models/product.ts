import { faker } from '@faker-js/faker';

class Product {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public image: string = '',
    public price: number = 0,
    public city: string = '',
    public sellersPhone: string = '',
    public seller: string = '',
    public date: Date = new Date(),
    public numberInStock: number = 1
  ) {}
}

export default Product;
