import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numBeers = 0;

  addBeer(): void {
    this.numBeers++;
  }

  clearBeer(): void {
    this.numBeers = 0;
  }
}
