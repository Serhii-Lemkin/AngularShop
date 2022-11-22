import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from 'src/app/routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { AddnewComponent } from './components/addnew/addnew.component';
import { DetailsComponent } from './components/details/details.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { ItemComponent } from './components/item/item.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import ProductService from './servises/prodService';
import FakerService from './servises/fakerService';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddnewComponent,
    DetailsComponent,
    OrderComponent,
    OrdersuccessComponent,
    ItemComponent,
    ItemlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [ProductService, FakerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
