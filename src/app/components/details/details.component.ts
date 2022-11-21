import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product';
import ProductService from 'src/app/servises/prodService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
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
  id: number = 0;
  product: Product = new Product();

  ngOnInit(): void {}
}
