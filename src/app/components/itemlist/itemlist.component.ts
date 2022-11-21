import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import ProductService from 'src/app/servises/prodService';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  constructor(private pService: ProductService ) { 
    pService.get().subscribe((data) => {
      this.products = data as Product[];
    });
  }

  products: Product[] = [];

  ngOnInit(): void {
  }

}
