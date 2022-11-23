import { Component } from '@angular/core';
import { DataService } from './servises/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private data: DataService) {
    this.getCurrency()
    this.update();
  }
  title = 'final-project-Serhii';
  selectedCurr: string = 'USD';
  selectionChanged() {    
    this.setCurrency();
  }

  setCurrency() {
    localStorage.setItem('currency', this.selectedCurr);
    this.update()
    console.log('set');
  }
  getCurrency() {
    this.selectedCurr = localStorage.getItem('currency') || "USD";
    console.log("get")
  }
update(){
  this.data.changeCurrency(this.selectedCurr);
  console.log("update")
}
}
