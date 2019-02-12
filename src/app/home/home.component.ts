import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'seed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
    console.log(debounceTime);
    console.log(map); // remove map for bundle testing
  }
}
