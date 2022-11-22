import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product';
import FakerService from 'src/app/servises/fakerService';
import ProductService from 'src/app/servises/prodService';
import { Validators } from '@angular/forms';

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
    const form = document.getElementById('form');
    if (form?.classList.contains('ng-invalid')) {
      alert('Please fill the required fields.')
      return;
    }
    this.pService.post(this.product).subscribe((data) => {
      this.router.navigateByUrl('/');
    });
  }
  fakeData() {
    this.product = this.faker.getFakeProduct();
  }
}
