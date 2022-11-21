import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product';
import ProductService from 'src/app/servises/prodService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  id: number = 0;
  product: Product = new Product();

  constructor(
    private pService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    var d = this.route.snapshot.paramMap.get('id');
    if (d) this.id = Number(d);
    pService
      .getById(this.id)
      .subscribe((data) => (this.product = data as Product));
  }
  orderClick() {
    if (this.product.numberInStock <= 1) {
      this.pService.delete(this.id).subscribe((data) => {});
    } else {
      this.product.numberInStock--;
      this.pService.put(this.product).subscribe((data) => {});
    }
  }

  ngOnInit(): void {}
}
