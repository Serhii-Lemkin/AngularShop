import { Component } from '@angular/core';
import { DataService } from './servises/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private data: DataService) {
    
  }
  title = 'final-project-Serhii';
  selectedCurr: string = 'USD';
  selectionChanged() {
    this.data.changeCurrency(this.selectedCurr)
  }
}
