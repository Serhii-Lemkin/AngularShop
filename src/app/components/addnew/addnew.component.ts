import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product';
import FakerService from 'src/app/servises/fakerService';
import ProductService from 'src/app/servises/prodService';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
})
export class AddnewComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private pService: ProductService,
    private router: Router,
    private faker: FakerService
  ) {}

  ngOnInit(): void {}

  addNewItem() {
    this.pService.post(this.product).subscribe((data) => {
      this.router.navigateByUrl('/');
    });
  }
  fakeData() {
    this.product = this.faker.getFakeProduct();
  }

  
}
